export const TASK_LIST = [
  { title: "MyComputer", icon: "/images/myComputer.png" },
  { title: "Documents", icon: "/images/postsFolder.png" },
  { title: "Tags", icon: "/images/tagsFolder.png" },
  { title: "Search", icon: "/images/search.png" },
];

export const TASK_STATE = {
  NONE: null,
  HIDE: "HIDE",
  OPEN: "OPEN",
};

export const INITIAL_TASK_STATE = [
  { title: "MyComputer", state: TASK_STATE.NONE },
  { title: "Documents", state: TASK_STATE.NONE },
  { title: "Tags", state: TASK_STATE.NONE },
  { title: "Search", state: TASK_STATE.NONE },
];
