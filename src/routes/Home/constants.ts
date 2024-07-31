type TTASK_LIST = {
  [key: string]: string;
};

export const TASK_LIST: TTASK_LIST = {
  Profile: "Profile",
  Documents: "Documents",
  Tags: "Tags",
  Search: "Search",
};
export const TASK_ICONS = [
  { title: TASK_LIST.Profile, icon: "/images/myComputer.png", x: 20, y: 15 },
  {
    title: TASK_LIST.Documents,
    icon: "/images/postsFolder.png",
    x: 20,
    y: 100,
  },
  { title: TASK_LIST.Tags, icon: "/images/tagsFolder.png", x: 20, y: 185 },
  { title: TASK_LIST.Search, icon: "/images/search.png", x: 20, y: 270 },
];

export const TASK_STATE = {
  HIDE: "hide",
  OPEN: "open",
};

export const DEFAULT_SIZE = 600;

export const ACTION_TYPES = {
  OPEN_FOLDER: "OPEN_FOLDER",
  HOME_KEY_DOWN: "HOME_KEY_DOWN",
};
