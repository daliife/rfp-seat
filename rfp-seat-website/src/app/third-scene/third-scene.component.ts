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

import { DropZone } from "./dropZone.component";
import { DragObject } from "./dragObject.component";

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
  private dropZones: DropZone[] = [];
  private dragObjects: DragObject[] = [];
  private isDragging: boolean = false;
  private position: { x: number; y: number };

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

    let rect = new DropZone(this.canvasEl.width / 2, 0, 50, 50);

    let rect1 = new DropZone(this.canvasEl.width / 2 + 100, 0, 50, 50);

    let rect2 = new DropZone(this.canvasEl.width / 2 + 200, 0, 50, 50);

    let rect3 = new DropZone(this.canvasEl.width / 2 + 300, 0, 50, 50);

    this.dropZones.push(rect);
    this.dropZones.push(rect1);
    this.dropZones.push(rect2);
    this.dropZones.push(rect3);

    let drag1 = new DragObject(0, 0, 50, 50);
    let drag2 = new DragObject(100, 0, 50, 50);
    let drag3 = new DragObject(200, 0, 50, 50);
    let drag4 = new DragObject(300, 0, 50, 50);

    this.dragObjects.push(drag1);
    this.dragObjects.push(drag2);
    this.dragObjects.push(drag3);
    this.dragObjects.push(drag4);

    this.draw();

    // we'll implement this method to start capturing mouse events
    this.captureEvents(this.canvasEl);
  }

  private draw() {
    this.cx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);

    for (let i = 0; i < this.dropZones.length; i++) {
      this.cx.fillStyle = "#000";
      this.cx.fillRect(
        this.dropZones[i].getCoordinates().x,
        this.dropZones[i].getCoordinates().y,
        this.dropZones[i].getWidthAndHeight().width,
        this.dropZones[i].getWidthAndHeight().height
      );
    }
    for (let i = 0; i < this.dragObjects.length; i++) {
      this.cx.fillStyle = "#f00";
      this.cx.fillRect(
        this.dragObjects[i].getCoordinates().x,
        this.dragObjects[i].getCoordinates().y,
        this.dragObjects[i].getWidthAndHeight().width,
        this.dragObjects[i].getWidthAndHeight().height
      );
    }
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    // listen for mouse events
    this.canvasEl.onmousedown = this.myDown.bind(this);
    this.canvasEl.onmouseup = this.myUp.bind(this);
    this.canvasEl.onmousemove = this.myMove.bind(this);
  }

  private myDown(e) {
    // incase the context is not set
    e.preventDefault();
    e.stopPropagation();

    if (!this.cx) {
      return;
    }

    const rect = this.canvasEl.getBoundingClientRect();
    let currentPos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    this.isDragging = false;
    for (let i = 0; i < this.dragObjects.length; i++) {
      if (this.dragObjects[i].isDropped()) continue;
      if (this.dragObjects[i].contains(currentPos.x, currentPos.y)) {
        this.isDragging = true;
        this.dragObjects[i].drag();
      }
    }
    this.position = currentPos;

    //if (this.rect.contains(currentPos.x, currentPos.y)) console.log("inside");
  }

  private myUp(e) {
    e.preventDefault();
    e.stopPropagation();

    // clear all the dragging flags

    for (let i = 0; i < this.dropZones.length; i++) {
      if (this.dropZones[i].isFull()) continue;
      if (this.dropZones[i].contains(this.position.x, this.position.y)) {
        this.dropZones[i].fill();
        for (let i = 0; i < this.dragObjects.length; i++) {
          if (this.dragObjects[i].isDragging()) {
            this.dragObjects[i].drop();
            console.log(this.dragObjects[i].isDropped());
          }
        }
      }
    }
    this.isDragging = false;
    for (let i = 0; i < this.dragObjects.length; i++) {
      this.dragObjects[i].stopDragging();
    }
  }

  private myMove(e) {
    // if we're dragging anything...
    if (this.isDragging) {
      // tell the browser we're handling this mouse event
      e.preventDefault();
      e.stopPropagation();

      // get the current mouse position
      const rect = this.canvasEl.getBoundingClientRect();
      let currentPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      // calculate the distance the mouse has moved
      // since the last mousemove
      let dx = currentPos.x - this.position.x;
      let dy = currentPos.y - this.position.y;

      // move each rect that isDragging
      // by the distance the mouse has moved
      // since the last mousemove
      for (let i = 0; i < this.dragObjects.length; i++) {
        let r = this.dragObjects[i];
        if (r.isDragging()) {
          r.setCoordinates(
            r.getCoordinates().x + dx,
            r.getCoordinates().y + dy
          );
        }
      }

      // redraw the scene with the new rect positions
      this.draw();

      // reset the starting mouse position for the next mousemove
      this.position = currentPos;
    }
  }
}
