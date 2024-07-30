import { Window } from "$components/Window";
import { folderState } from "$utils/atom";
import { memo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

export const FolderComponents = memo(() => {
  const folders = useRecoilValue(folderState);
  const [_, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({
      folder: `${JSON.stringify(folders)}`,
    });
  }, [folders]);
  return (
    <>
      {folders.map((item, index) => (
        <Window key={item.title} item={item} index={index + 10} />
      ))}
    </>
  );
});
