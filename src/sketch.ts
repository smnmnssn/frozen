//---- GLOBAL VARIABLES ----//
let game: Game;
let music: {
  mystery: p5.SoundFile;
};
let backgroundImg, teleport, teleportLarge, snowflake, cloud, trampoline;
let platform, icyPlatform, iciclePlatform;
let greenHalfSquish, greenSquish, yellowHalfSquish, yellowSquish;
let yellowLeft, yellowRight, greenLeft, greenRight;
let greenHalfBounce, greenBounce, yellowHalfBounce, yellowBounce;
let soundOn, soundOff;
let yellowKeys, greenKeys;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  music = {
    mystery: loadSound("/assets/music/mystery.mp3"),
  };
  backgroundImg = loadImage("/assets/images/bgLevel1.png");
  cloud = loadImage("/assets/images/cloud.svg");
  snowflake = loadImage("/assets/images/snowflake.svg");
  platform = loadImage("/assets/images/platform.svg");
  icyPlatform = loadImage("/assets/images/icyPlatform.svg");
  iciclePlatform = loadImage("/assets/images/iciclePlatform.svg");
  teleport = loadImage("assets/images/teleport.svg");
  teleportLarge = loadImage("assets/images/teleportLarge.svg");
  trampoline = loadImage("/assets/images/trampoline.svg");
  soundOn = loadImage("/assets/images/soundOn.svg");
  soundOff = loadImage("/assets/images/sounOff.svg");
  greenKeys = loadImage("/assets/images/playerKeysGreen.svg");
  yellowKeys = loadImage("/assets/images/playerKeysYellow.svg");

  greenHalfSquish = loadImage("/assets/images/greenPlayerHalfSquish.svg");
  greenSquish = loadImage("/assets/images/greenPlayerSquish.svg");
  yellowHalfSquish = loadImage("/assets/images/yellowPlayerHalfSquish.svg");
  yellowSquish = loadImage("/assets/images/yellowPlayerSquish.svg");

  greenHalfBounce = loadImage("/assets/images/greenPlayerHalfBounce.svg");
  greenBounce = loadImage("/assets/images/greenPlayerBounce.svg");
  yellowHalfBounce = loadImage("/assets/images/yellowPlayerHalfBounce.svg");
  yellowBounce = loadImage("/assets/images/yellowPlayerBounce.svg");

  yellowRight = loadImage("/assets/images/yellowPlayerRight.svg");
  yellowLeft = loadImage("/assets/images/yellowPlayerLeft.svg");
  greenRight = loadImage("/assets/images/greenPlayerRight.svg");
  greenLeft = loadImage("/assets/images/greenPlayerLeft.svg");
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  music.mystery.setVolume(0.8);

  game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
