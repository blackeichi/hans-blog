type TTASK_LIST = {
  [key: string]: string;
};

export const TASK_LIST: TTASK_LIST = {
  Profile: "Profile",
  Documents: "Documents",
  Tags: "Tags",
  Search: "Search",
  GameMine: "GameMine",
};
export const ICONS = {
  [TASK_LIST.Profile]: "/images/myComputer.png",
  [TASK_LIST.Documents]: "/images/postsFolder.png",
  [TASK_LIST.Tags]: "/images/tagsFolder.png",
  [TASK_LIST.Search]: "/images/search.png",
  [TASK_LIST.GameMine]: "/images/gameMine.png",
};
export const TASK_ICONS = [
  { title: TASK_LIST.Profile, icon: ICONS[TASK_LIST.Profile], x: 20, y: 15 },
  {
    title: TASK_LIST.Documents,
    icon: ICONS[TASK_LIST.Documents],
    x: 20,
    y: 100,
  },
  { title: TASK_LIST.Tags, icon: ICONS[TASK_LIST.Tags], x: 20, y: 185 },
  { title: TASK_LIST.Search, icon: ICONS[TASK_LIST.Search], x: 20, y: 270 },
  { title: TASK_LIST.GameMine, icon: ICONS[TASK_LIST.GameMine], x: 20, y: 355 },
];

export const TASK_STATE = {
  HIDE: "hide",
  OPEN: "open",
};

export const DEFAULT_WIDTH = 600;
export const DEFAULT_HEIGHT = 500;

export const ACTION_TYPES = {
  OPEN_FOLDER: "OPEN_FOLDER",
  HOME_KEY_DOWN: "HOME_KEY_DOWN",
};
