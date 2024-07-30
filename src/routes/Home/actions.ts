import { useSetFolderState } from "$utils/hooks/useSetFolderState";

export function SetOpenedFolders(titles: string[]) {
  return useSetFolderState(titles);
}
