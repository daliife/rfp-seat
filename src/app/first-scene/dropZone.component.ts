export class DropZone {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private full: boolean;

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.full = false;
  }

  contains = (x, y) => {
    return (
      this.x <= x &&
      x <= this.x + this.width &&
      this.y <= y &&
      y <= this.y + this.height
    );
  };

  getCoordinates() {
    return { x: this.x, y: this.y };
  }
  getWidthAndHeight() {
    return { width: this.width, height: this.height };
  }
  isFull() {
    return this.full;
  }
  fill() {
    this.full = true;
  }
  empty() {
    this.full = false;
  }
}
