export class MyRect {
  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }

  contains = (x, y) => {
    return (
      this.x <= x &&
      x <= this.x + this.width &&
      this.y <= y &&
      y <= this.y + this.height
    );
  };
}
