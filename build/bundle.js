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