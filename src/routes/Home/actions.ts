import { useSetFolderState } from "$utils/hooks/useSetFolderState";

export function SetOpenedFolders(
  titles: string[],
  screen: { innerWidth: number; innerHeight: number }
) {
  return useSetFolderState(titles, screen);
}
