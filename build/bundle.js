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
const gameObjects = [];
for (let y = 0; y <= level1.length; y++) {
    for (let x = 0; x < level1[y].length; y++) {
        let value = level1[y][x];
        if (value === 1) {
            gameObjects.push(new Player("yellow", x, y));
        }
        if (value === 2) {
            gameObjects.push(new Player("green", x, y));
        }
        if (value === 3) {
            gameObjects.push(new Transporter());
        }
        if (value === 4) {
            gameObjects.push(new Platform());
        }
        if (value === 5) {
            gameObjects.push(new Trampoline());
        }
        if (value === 6) {
            gameObjects.push(new Snowman());
        }
        if (value === 8) {
            gameObjects.push(new Timer("yellow"));
        }
        if (value === 9) {
            gameObjects.push(new Timer("green"));
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