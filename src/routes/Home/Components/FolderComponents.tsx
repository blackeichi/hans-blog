import { Window } from "$components/Window";
import { TselectedIndexState } from "$utils/atom";

interface FolderComponentsProps {
  folders: TselectedIndexState;
}

export const FolderComponents = ({ folders }: FolderComponentsProps) => {
  return (
    <>
      {folders.map((item, index) => (
        <Window key={item.title} item={item} index={index} />
      ))}
    </>
  );
};
