const player1 = 1;
const player2 = 2;
const transporter = 3;
const platform = 4;
const trampoline = 5;
const snowman = 6;
const timerPlayer1 = 8;
const timerPlayer2 = 9;
const frameX = 144;
const frameY = 102.4;

const level1: Array[Array[number]] = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 9, 6, 0, 3, 0],
  [1, 0, 0, 4, 4, 4, 4, 0, 0, 0],
  [4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, 0],
  [0, 4, 4, 0, 0, 0, 4, 4, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 0],
];

for (let x = 0; x <= level1.length(); x++) {
  for (let y = 0; x <= 8; y++) {
    let value = y;
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
