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
  selector: "app-second-scene",
  templateUrl: "./second-scene.component.html",
  styleUrls: ["./second-scene.component.css"],
})
export class SecondSceneComponent implements AfterViewInit {
  // a reference to the canvas element from our template
  @ViewChild("canvas") public canvas: ElementRef;

  // setting a width and height for the canvas
  @Input() public width;
  @Input() public height;
  @Output() onDiscoverPath: EventEmitter<any> = new EventEmitter();

  private cx: CanvasRenderingContext2D;

  public ngAfterViewInit() {
    this.width = document.getElementById("canvas").offsetWidth;
    this.height = 721;
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext("2d");

    let cx = this.cx;

    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = "round";
    this.cx.strokeStyle = "#000";

    let url =
      "https://cloud.githubusercontent.com/assets/4652816/12771961/5341c3c4-ca68-11e5-844c-f659831d9c00.jpg";

    let img = new Image();
    img.src = url;
    img.onload = () => {
      cx.drawImage(img, 0, 0, canvasEl.width, canvasEl.height);
    };

    // we'll implement this method to start capturing mouse events
    this.captureEvents(canvasEl);
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
    let rect = new MyRect(820, 591, 130, 130);

    // incase the context is not set
    if (!this.cx) {
      return;
    }

    this.cx.globalCompositeOperation = "destination-out";

    // start our drawing path
    this.cx.beginPath();

    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      //this.cx.moveTo(prevPos.x, prevPos.y); // from

      // draws a line from the start pos until the current position
      //this.cx.lineTo(currentPos.x, currentPos.y);

      // strokes the current path with the styles we set earlier
      //this.cx.stroke();

      this.cx.arc(currentPos.x, currentPos.y, 10, 0, 2 * Math.PI);
      this.cx.fill();

      this.cx.lineWidth = 60;
      this.cx.beginPath();
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();

      if (rect.contains(currentPos.x, currentPos.y)) {
        this.onDiscoverPath.emit();
      }
    }
  }
}
