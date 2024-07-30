export const TASK_LIST = {
  MyComputer: "MyComputer",
  Documents: "Documents",
  Tags: "Tags",
  Search: "Search",
};
export const TASK_ICONS = [
  { title: TASK_LIST.MyComputer, icon: "/images/myComputer.png", x: 20, y: 15 },
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

export const DEFAULT_SIZE = 500;
