export const GLOBAL_COLOR = {
  bgGreen: "#68888A",
  green: "#008080",
  blue: "#1A0E61",
  lightGray: "#E9E9E9",
  gray: "#C0C0C0",
  darkGray: "#403F40",
  shadow: "#818184",
  black: "#0B090A",
};

export const KEY_EVENTS = {
  ENTER: "Enter",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  META: "Meta",
};

export const TASK_BAR_HEIGHT = 35;
export const FOLDER_MIN_WIDTH = 200;
export const FOLDER_MIN_HEIGHT = 150;

export const FIRE_STORE_POSTS = "posts";
export const FIRE_STORE_TAGS = "tags";

export const URL_DOMAIN = "https://www.googleapis.com/youtube/v3/";

export const GAME_BOARD_SIZE: {
  width: number;
  height: number;
  totalMine: number;
}[] = [
  {
    width: 9,
    height: 9,
    totalMine: 10,
  },
  {
    width: 16,
    height: 16,
    totalMine: 40,
  },
  {
    width: 30,
    height: 16,
    totalMine: 99,
  },
];
