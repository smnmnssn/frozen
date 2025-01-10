"use strict";
class Game {
    constructor() {
        this.position = createVector(width * 0.5, height * 0.5);
        this.isCircleVisible = false;
    }
    update() {
        this.position.set(mouseX, mouseY);
        this.isCircleVisible = mouseIsPressed;
        if (mouseIsPressed) {
            if (!music.mystery.isPlaying()) {
                music.mystery.loop();
            }
        }
        else {
            music.mystery.pause();
        }
    }
    draw() {
        background("black");
        this.drawText();
        if (this.isCircleVisible) {
            this.drawCircle();
        }
    }
    drawText() {
        push();
        fill("white");
        textSize(width * 0.1);
        textStyle("bold");
        textAlign("center");
        text("Click & Drag", width * 0.5, height * 0.5);
        pop();
    }
    drawCircle() {
        push();
        fill(0, 255, 0, 200);
        stroke("white");
        strokeWeight(width * 0.01);
        circle(this.position.x, this.position.y, width * 0.2);
        pop();
    }
}
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
const level1 = [
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
let game;
let music;
function preload() {
    music = {
        mystery: loadSound("/assets/music/mystery.mp3"),
    };
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    music.mystery.setVolume(0.8);
    game = new Game();
}
function draw() {
    game.update();
    game.draw();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=bundle.js.map