class gameObject {
  width: number;
  height: number;
  img: string;
  isSolid: boolean;
  position: p5.Vector;

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
