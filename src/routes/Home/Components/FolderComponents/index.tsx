import { folderState } from "$utils/atom";
import { useDidMountEffect } from "$utils/hooks/useDidMountEffect";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { WindowComponent } from "./WindowComponent";

export const FolderComponents = memo(() => {
  const folders = useRecoilValue(folderState);
  const url = new URL(window.location as any);
  useDidMountEffect(() => {
    url.searchParams.set("folder", JSON.stringify(folders));
    window.history.pushState({}, "", url);
  }, [folders]);
  return (
    <AnimatePresence initial={false}>
      {folders.map((item, index) => (
        <WindowComponent key={item.title} item={item} index={index} />
      ))}
    </AnimatePresence>
  );
});
