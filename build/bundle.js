"use strict";
class Game {
    constructor(initialScreen) {
        this.activeScreen = initialScreen;
    }
    changeActiveScreen(scene) {
        this.activeScreen = scene;
    }
    updateCurrentScreen() {
        this.activeScreen.update();
        this.activeScreen.draw();
    }
    update() { }
    draw() {
        background("black");
        this.drawText();
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
}
class gameObject {
    constructor() {
        this.width = width;
        this.height = height;
        this.img = this.img;
        this.isSolid = true;
        this.position = position;
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
let cloudImg;
let snowflakeImg;
let platformImg;
let player1Img;
let player2Img;
class StartScreen {
    constructor() {
        this.titlePosition = createVector(400, 100);
        this.textPosition = createVector(400, 150);
        this.cloudPosition = createVector(200, 100);
        this.snowflakePositions = [];
        this.platformPosition = createVector(0, 550);
        this.player1Position = createVector(55, 550);
        this.player2Position = createVector(400, 550);
    }
    draw() {
        this.drawTitle();
        this.drawText();
        this.drawCloud();
        this.drawSnowflakes();
        this.drawPlatform();
        this.drawPlayer1();
        this.drawPlayer2();
    }
    drawTitle() {
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Tag or DIE!", this.titlePosition.x, this.titlePosition.y);
        textFont(kavoonFont);
    }
    drawText() {
        fill("white");
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Press any key to continue", this.textPosition.x, this.textPosition.y);
    }
    drawCloud() {
        image(cloudImg, this.cloudPosition.x, this.cloudPosition.y, 120, 80);
    }
    drawSnowflakes() {
        for (let pos of this.snowflakePositions) {
            image(snowflakeImg, pos.x, pos.y, 20, 20);
        }
    }
    drawPlatform() {
        image(platformImg, this.platformPosition.x, this.platformPosition.y, 800, 50);
    }
    drawPlayer1() {
        image(player1Img, this.player1Position.x, this.player1Position.y);
    }
    drawPlayer2() {
        image(player2Img, this.player2Position.x, this.player2Position.y);
    }
}
let startScreen;
let kavoonFont;
function preload() {
    cloudImg = loadImage("assets/images/cloud.svg");
    snowflakeImg = loadImage("assets/images/snowflake.svg");
    platformImg = loadImage("assets/images/platform.svg");
    kavoonFont = loadFont("assets/Font(s)/Kavoon-Regular.ttf");
    player1Img = loadImage("assets/images/greenPlayerRight.svg");
    player2Img = loadImage("assets/images/yellowPlayerLeft.svg");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    startScreen = new StartScreen();
    textFont(kavoonFont);
}
function draw() {
    background(135, 206, 250);
    startScreen.draw();
    for (let pos of startScreen.snowflakePositions) {
        pos.y += 1;
        if (pos.y > height)
            pos.y = 0;
    }
}
//# sourceMappingURL=bundle.js.map