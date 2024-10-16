import { errorState, loadingState } from "$utils/atom";
import { URL_DOMAIN } from "$utils/constants";
import { getErrorMsg } from "$utils/libs/etcLibs";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";

export function useFetch(url: string, title: string, queryOptions = {}) {
  const setErrorState = useSetRecoilState(errorState);
  const setLoadingState = useSetRecoilState(loadingState);
  const { data, refetch, isLoading, error } = useQuery(
    title,
    () =>
      fetch(
        `${URL_DOMAIN}${url}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      ).then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      }),
    {
      retry: 0,
      ...queryOptions,
    }
  );
  useEffect(() => {
    if (isLoading) {
      setLoadingState((prev) => prev + 1);
    } else {
      setLoadingState((prev) => prev - 1);
    }
  }, [isLoading]);
  if (error) {
    const msg = getErrorMsg(error);
    setErrorState(msg);
  }
  return { data, refetch, isLoading };
}
