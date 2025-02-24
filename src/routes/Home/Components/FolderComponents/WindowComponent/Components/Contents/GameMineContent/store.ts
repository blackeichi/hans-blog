import { GAME_BOARD_SIZE } from "$utils/constants";

export class Cell {
  cell: number;
  isOpen: boolean;
  isPicked: boolean;

  constructor(cell: number, isOpen: boolean, isPicked: boolean) {
    this.cell = cell;
    this.isOpen = isOpen;
    this.isPicked = isPicked;
  }

  isZero() {
    return this.cell === 0;
  }

  isMine() {
    return this.cell === -1;
  }

  open() {
    this.isOpen = true;
  }
  pickFlag() {
    this.isPicked = true;
  }
  removeFlag() {
    this.isPicked = false;
  }
}

export class GameStore {
  WIDTH: number;
  HEIGHT: number;
  TOTAL_MINE: number;
  mineCount: number;
  isOver: boolean;
  isStart: boolean;
  isWin: boolean;
  board: Cell[][];

  constructor(width: number, height: number, totalMine: number) {
    this.WIDTH = width;
    this.HEIGHT = height;
    this.TOTAL_MINE = totalMine;
    this.mineCount = totalMine;
    this.isOver = false;
    this.isStart = false;
    this.isWin = false;
    this.board = this.createBoard();
  }

  totalCell() {
    return this.WIDTH * this.WIDTH;
  }

  reset() {
    this.isOver = false;
    this.isStart = false;
    this.isWin = false;
    this.mineCount = this.TOTAL_MINE;
    this.board = this.createBoard();
  }

  saveMineCount(count: number) {
    this.mineCount = count;
  }

  saveBoard(board: Cell[][]) {
    this.board = board;
  }

  over() {
    this.isOver = true;
  }

  checkWin() {
    if (this.countOpenCell() === this.totalCell() - this.TOTAL_MINE) {
      this.isWin = true;
    }
  }

  start() {
    this.isStart = true;
  }

  countOpenCell() {
    return this.board
      .map((value) => value.filter((v) => v.isOpen === true).length)
      .reduce((pre, curr) => pre + curr);
  }
  /* eslint-disable */
  createBoard() {
    const mineMap: Cell[][] = Array.from(Array(this.HEIGHT), () => {
      return Array(this.WIDTH)
        .fill(undefined)
        .map(() => {
          return new Cell(0, false, false);
        });
    });
    // 지뢰 랜덤 배치
    for (let i = 0; i < this.TOTAL_MINE; i++) {
      const randomIntH = Math.floor(Math.random() * this.HEIGHT);
      const randomIntW = Math.floor(Math.random() * this.WIDTH);

      if (mineMap[randomIntH][randomIntW].cell === -1) {
        i--;
        continue;
      }

      mineMap[randomIntH][randomIntW].cell = -1;
    }
    // Cell 주변 지뢰 수 체크
    for (let h = 0; h < this.HEIGHT; h++) {
      for (let w = 0; w < this.WIDTH; w++) {
        let mineCount: number = 0;
        if (mineMap[h][w].cell === -1) continue;
        // 윗줄
        if (h > 0) {
          mineMap[h - 1][w].cell === -1 ? mineCount++ : null;
          if (w > 0) {
            mineMap[h - 1][w - 1].cell === -1 ? mineCount++ : null;
          }
          if (w < this.WIDTH - 1) {
            mineMap[h - 1][w + 1].cell === -1 ? mineCount++ : null;
          }
        }
        // 왼쪽
        if (w > 0) {
          mineMap[h][w - 1].cell === -1 ? mineCount++ : null;
        }
        // 오른쪽
        if (w < this.WIDTH - 1) {
          mineMap[h][w + 1].cell === -1 ? mineCount++ : null;
        }
        // 아랫줄
        if (h < this.HEIGHT - 1) {
          mineMap[h + 1][w].cell === -1 ? mineCount++ : null;
          if (w > 0) {
            mineMap[h + 1][w - 1].cell === -1 ? mineCount++ : null;
          }
          if (w < this.WIDTH - 1) {
            mineMap[h + 1][w + 1].cell === -1 ? mineCount++ : null;
          }
        }
        mineMap[h][w].cell = mineCount;
      }
    }
    return mineMap;
  }

  openCell(h: number, w: number) {
    const newBoard = [...this.board];
    newBoard[h][w].open();
    this.saveBoard(newBoard);
  }
  pickFlag(h: number, w: number) {
    const newBoard = [...this.board];
    newBoard[h][w].pickFlag();
    this.saveBoard(newBoard);
  }
  removeFlag(h: number, w: number) {
    const newBoard = [...this.board];
    newBoard[h][w].removeFlag();
    this.saveBoard(newBoard);
  }
  openMines() {
    const newBoard = [...this.board];
    for (let h = 0; h < newBoard.length; h++) {
      for (let w = 0; w < newBoard[0].length; w++) {
        if (newBoard[h][w].cell !== -1) continue;
        newBoard[h][w].cell === -1 ? (newBoard[h][w].isOpen = true) : null;
      }
    }
    this.saveBoard(newBoard);
    this.over();
  }

  openSafeCells(h: number, w: number) {
    const newBoard = [...this.board];
    const zeroInCell: { h: number; w: number }[] = [];

    function cellOpen(h: number, w: number) {
      if (newBoard[h][w].isOpen === false) {
        newBoard[h][w].open();
        newBoard[h][w].cell === 0 && zeroInCell.push({ h, w });
      }
    }
    // 나 자신
    cellOpen(h, w);
    // 윗줄
    if (h > 0) {
      cellOpen(h - 1, w);

      if (w > 0) {
        cellOpen(h - 1, w - 1);
      }
      if (w < this.WIDTH - 1) {
        cellOpen(h - 1, w + 1);
      }
    }
    // 왼쪽
    if (w > 0) {
      cellOpen(h, w - 1);
    }
    // 오른쪽
    if (w < this.WIDTH - 1) {
      cellOpen(h, w + 1);
    }
    // 아랫줄
    if (h < this.WIDTH - 1) {
      cellOpen(h + 1, w);

      if (w > 0) {
        cellOpen(h + 1, w - 1);
      }
      if (w < this.WIDTH - 1) {
        cellOpen(h + 1, w + 1);
      }
    }
    if (zeroInCell.length) {
      zeroInCell.forEach((cell) => {
        this.openSafeCells(cell.h, cell.w);
      });
    } else {
      this.saveBoard(newBoard);
    }
  }
}

export const getGameObject = (difficulty: number) => {
  const { width, height, totalMine } = GAME_BOARD_SIZE[difficulty];
  return new GameStore(width, height, totalMine);
};
