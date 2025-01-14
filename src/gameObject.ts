class gameObject {
  private width: number;
  private height: number;
  private img: string;
  private isSolid: boolean;
  private position: p5.Vector;

  constructor(
    width: number,
    height: number,
    img: string,
    position: p5.Vector,
    isSolid: boolean
  ) {
    this.width = width;
    this.height = height;
    this.img = img;
    this.isSolid = isSolid;
    this.position = position;
  }

  public draw() {}

  public update() {}
}
