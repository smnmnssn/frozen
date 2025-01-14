class Game {
  activeScreen: Screen;

  constructor(initialScreen: Screen) {
    this.activeScreen = initialScreen;
  }

  public changeActiveScreen(scene: Screen): void {
    this.activeScreen = scene; // switch to new screen
  }

  updateCurrentScreen(): void {
    this.activeScreen.update();
    this.activeScreen.draw();
  }

  public update() {}

  public draw() {
    background("black");
    this.drawText();
  }

  public drawText() {
    push();
    fill("white");
    textSize(width * 0.1);
    textStyle("bold");
    textAlign("center");
    text("Click & Drag", width * 0.5, height * 0.5);
    pop();
  }
}
