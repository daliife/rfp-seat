export class DragObject {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private dragging: boolean;
  private dropped: boolean;

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.dragging = false;
    this.dropped = false;
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
  setCoordinates(x, y) {
    this.x = x;
    this.y = y;
  }
  getWidthAndHeight() {
    return { width: this.width, height: this.height };
  }
  isDragging() {
    return this.dragging;
  }
  drag() {
    this.dragging = true;
  }
  stopDragging() {
    this.dragging = false;
  }
  isDropped() {
    return this.dropped;
  }
  drop() {
    this.dropped = true;
  }
}
