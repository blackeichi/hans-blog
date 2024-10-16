import { errorState, loadingState } from "$utils/atom";
import { URL_DOMAIN } from "$utils/constants";
import { getErrorMsg } from "$utils/libs/etcLibs";
import { FetchState, MutationReturnType } from "$utils/types";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

export function useMutation(url: string, method = "POST"): MutationReturnType {
  const [state, setState] = useState<FetchState>({
    loading: false,
    data: undefined,
    statusCode: 0,
  });
  const setErrorState = useSetRecoilState(errorState);
  const setLoadingState = useSetRecoilState(loadingState);
  function mutation<T>(body: T) {
    const isFile = body instanceof FormData;
    const options = {
      method,
      body: isFile ? body : JSON.stringify(body),
    };
    setLoadingState(1);
    setState((prev) => ({ ...prev, loading: true }));
    fetch(
      `${URL_DOMAIN}${url}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      options
    )
      .then((res) => {
        setState((prev) => ({ ...prev, statusCode: res.status }));
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        setState((prev) => ({ ...prev, data }));
      })
      .catch((error) => {
        const msg = getErrorMsg(error);
        setErrorState(msg);
      })
      .finally(() => {
        setState((prev) => ({ ...prev, loading: false }));
        setLoadingState(0);
      });
  }
  return [mutation, { ...state }];
}
