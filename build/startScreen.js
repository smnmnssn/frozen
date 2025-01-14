let cloudImg;
let snowflakeImg;
let platformImg;
let player1Img;
let player2Img;
class StartScreen {
    constructor() {
        this.titlePosition = createVector(windowWidth * 0.5, windowHeight * 0.5);
        this.textPosition = createVector(windowWidth * 0.5, 600);
        this.cloudPosition = createVector(200, 200);
        this.snowflakePositions = [];
        this.platformPosition = createVector(50, 750);
        this.player1Position = createVector(100, 680);
        this.player2Position = createVector(500, 680);
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
        fill("white");
        textSize(100);
        textAlign(CENTER, CENTER);
        text("Tag or DIE!", this.titlePosition.x, this.titlePosition.y);
    }
    drawText() {
        fill("white");
        textSize(50);
        textAlign(CENTER, );
        text("Press any key to continue", this.textPosition.x, this.textPosition.y);
    }
    drawCloud() {
        image(cloudImg, this.cloudPosition.x, this.cloudPosition.y, 500, 260);

    }
    drawSnowflakes() {
        for (let pos of this.snowflakePositions) {
            image(snowflakeImg, pos.x, pos.y, 30, 30);
        }
    }
    drawPlatform() {
        image(platformImg, this.platformPosition.x, this.platformPosition.y, 550, 50);
    }
    drawPlayer1() {
        image(player1Img, this.player1Position.x, this.player1Position.y);
    }
    drawPlayer2() {
        image(player2Img, this.player2Position.x, this.player2Position.y);
    }
}
let startScreen;
function preload() {
    cloudImg = loadImage("assets/images/cloud.svg");
    snowflakeImg = loadImage("assets/images/snowflake.svg");
    platformImg = loadImage("assets/images/platformStart.svg");
    kavoonFont = loadFont("assets/Font(s)/Kavoon-Regular.ttf");
    player1Img = loadImage("assets/images/greenPlayerRight.svg");
    player2Img = loadImage("assets/images/yellowPlayerLeft.svg");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    startScreen = new StartScreen();
    textFont(kavoonFont);

    for (let i = 0; i < 100; i++) {
        startScreen.snowflakePositions.push(createVector(random(width), random(-100, height)));
    }

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