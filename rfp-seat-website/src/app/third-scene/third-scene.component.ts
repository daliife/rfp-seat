import {
  Component,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  EventEmitter,
} from "@angular/core";
import { fromEvent } from "rxjs";
import { switchMap, takeUntil, pairwise } from "rxjs/operators";

import { MyRect } from "./rectangle.component";

@Component({
  selector: "app-third-scene",
  templateUrl: "./third-scene.component.html",
  styleUrls: ["./third-scene.component.css"],
})
export class ThirdSceneComponent implements AfterViewInit {
  // a reference to the canvas element from our template
  @ViewChild("canvas") public canvas: ElementRef;

  // setting a width and height for the canvas
  @Input() public width;
  @Input() public height;
  @Output() onDiscoverPath: EventEmitter<any> = new EventEmitter();

  private canvasEl: HTMLCanvasElement;

  private cx: CanvasRenderingContext2D;
  private rectangles: MyRect[] = [];
  private rect: MyRect;

  public ngAfterViewInit() {
    this.width = document.getElementById("canvas").offsetWidth;
    this.height = document.getElementById("canvas").offsetHeight;
    // get the context
    this.canvasEl = this.canvas.nativeElement;
    this.cx = this.canvasEl.getContext("2d");

    let cx = this.cx;

    // set the width and height
    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;

    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = "round";
    this.cx.strokeStyle = "#000";

    let rect = new MyRect(
      0,
      0,
      this.canvasEl.width / 2 + this.canvasEl.width / 9,
      this.canvasEl.height / 7
    );

    let rect1 = new MyRect(
      0,
      this.canvasEl.height / 7,
      this.canvasEl.width / 5,
      this.canvasEl.height
    );

    let rect2 = new MyRect(
      this.canvasEl.width / 5,
      this.canvasEl.height / 2 + this.canvasEl.height / 4.5,
      this.canvasEl.width / 3 + this.canvasEl.width / 6.5,
      this.canvasEl.height
    );

    let rect3 = new MyRect(
      this.canvasEl.width / 2 + this.canvasEl.width / 5,
      0,
      this.canvasEl.width,
      this.canvasEl.height / 2 + this.canvasEl.height / 9
    );

    let rect4 = new MyRect(
      this.canvasEl.width / 3.8,
      this.canvasEl.height / 3.6,
      this.canvasEl.width / 2.29,
      this.canvasEl.height / 3
    );

    let rect5 = new MyRect(
      this.canvasEl.width / 2 + this.canvasEl.width / 4,
      this.canvasEl.height / 2 + this.canvasEl.height / 8.99,
      this.canvasEl.width,
      this.canvasEl.height
    );

    this.rectangles.push(rect);
    this.rectangles.push(rect1);
    this.rectangles.push(rect2);
    this.rectangles.push(rect3);
    this.rectangles.push(rect4);
    this.rectangles.push(rect5);

    for (let i = 0; i < this.rectangles.length; i++) {
      this.cx.fillRect(
        this.rectangles[i].getCoordinates().x,
        this.rectangles[i].getCoordinates().y,
        this.rectangles[i].getWidthAndHeight().width,
        this.rectangles[i].getWidthAndHeight().height
      );
    }

    // we'll implement this method to start capturing mouse events
    this.captureEvents(this.canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, "mousedown")
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, "mousemove").pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            takeUntil(fromEvent(canvasEl, "mouseup")),
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            takeUntil(fromEvent(canvasEl, "mouseleave")),
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            pairwise()
          );
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top,
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top,
        };

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    // incase the context is not set
    if (!this.cx) {
      return;
    }

    if (this.rect.contains(currentPos.x, currentPos.y)) console.log("inside");
  }
}
