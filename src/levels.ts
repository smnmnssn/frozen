const player1: number = 1;
const player2: number = 2;
const transporter: number = 3;
const platform: number = 4;
const trampoline: number = 5;
const snowman: number = 6;
const timerPlayer1: number = 8;
const timerPlayer2: number = 9;
const frameX: number = 144;
const frameY: number = 102.4;

const level1: number[][] = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 9, 6, 0, 3, 0],
  [1, 0, 0, 4, 4, 4, 4, 0, 0, 0],
  [4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, 0],
  [0, 4, 4, 0, 0, 0, 4, 4, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 0],
];

for (let y = 0; y <= level1.length; y++) {
  for (let x = 0; x < level1[y].length; y++) {
    let value = level1[y][x];
    if (value === 1) {
      const player1 = new Player();
    }
    if (value === 2) {
      const player2 = new Player();
    }
    if (value === 3) {
      const transporter = new Transporter();
    }
    if (value === 4) {
      const platform = new Platform();
    }
    if (value === 5) {
      const trampoline = new Trampoline();
    }
    if (value === 6) {
      const snowman = new Snowman();
    }
    if (value === 8) {
      const timerPlayer1 = new Timer();
    }
    if (value === 9) {
      const timerPlayer2 = new Timer();
    }
  }
}
