import {
  Component,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  EventEmitter,
} from '@angular/core';

import { DropZone } from './dropZone.component';
import { DragObject } from './dragObject.component';

@Component({
  selector: 'app-first-scene',
  templateUrl: './first-scene.component.html',
  styleUrls: ['./first-scene.component.css'],
})
export class FirstSceneComponent implements AfterViewInit {
  // a reference to the canvas element from our template
  @ViewChild('canvas') public canvas: ElementRef;

  @Input() public width;

  @Input() public height;

  @Output() finishLoadSuitcase: EventEmitter<any> = new EventEmitter();

  private canvasEl: HTMLCanvasElement;
  private cx: CanvasRenderingContext2D;
  private dropZones: DropZone[] = [];
  private dragObjects: DragObject[] = [];
  private isDragging = false;
  private position: { x: number; y: number };
  private loop;

  private suitcases = [];
  private counterSuitcase = 0;

  public ngAfterViewInit() {
    this.canvasEl = this.canvas.nativeElement;
    this.cx = this.canvasEl.getContext('2d');
    document.getElementById('imatge').onload = () => {
      const width = document.getElementById('canvas').offsetWidth;
      let height = document.getElementById('canvas').offsetHeight;
      height = document.getElementById('imatge').offsetHeight;
      // set the width and height
      this.canvasEl.width = width;
      this.canvasEl.height = height;

      const rect = new DropZone(
        this.canvasEl.width / 2 + this.canvasEl.width / 4.31,
        this.canvasEl.height / 2 + this.canvasEl.height / 9.3,
        this.canvasEl.width / 21.9,
        this.canvasEl.height / 10
      );

      const rect1 = new DropZone(
        this.canvasEl.width / 2 + this.canvasEl.width / 3.5,
        this.canvasEl.height / 2 + this.canvasEl.height / 9.3,
        this.canvasEl.width / 21.9,
        this.canvasEl.height / 10
      );

      const rect2 = new DropZone(
        this.canvasEl.width / 2 + this.canvasEl.width / 4.31,
        this.canvasEl.height / 2 + this.canvasEl.height / 4.5,
        this.canvasEl.width / 21.9,
        this.canvasEl.height / 10
      );

      const rect3 = new DropZone(
        this.canvasEl.width / 2 + this.canvasEl.width / 3.5,
        this.canvasEl.height / 2 + this.canvasEl.height / 4.5,
        this.canvasEl.width / 21.9,
        this.canvasEl.height / 10
      );

      this.dropZones.push(rect);
      this.dropZones.push(rect1);
      this.dropZones.push(rect2);
      this.dropZones.push(rect3);

      const drag1 = new DragObject(
        this.canvasEl.width / 2.302,
        this.canvasEl.height / 3.01,
        this.canvasEl.width / 21.9,
        this.canvasEl.height / 10
      );
      const drag2 = new DragObject(
        this.canvasEl.width / 2.302,
        this.canvasEl.height / 2.1,
        this.canvasEl.width / 21.9,
        this.canvasEl.height / 10
      );
      const drag3 = new DragObject(
        this.canvasEl.width / 2.302,
        this.canvasEl.height / 2 + this.canvasEl.height / 8.3,
        this.canvasEl.width / 21.9,
        this.canvasEl.height / 10
      );
      const drag4 = new DragObject(
        this.canvasEl.width / 2.302,
        this.canvasEl.height / 2 + this.canvasEl.height / 3.73,
        this.canvasEl.width / 21.9,
        this.canvasEl.height / 10
      );

      this.dragObjects.push(drag1);
      this.dragObjects.push(drag2);
      this.dragObjects.push(drag3);
      this.dragObjects.push(drag4);

      this.draw();
    };

    for (let i = 0; i < 4; i++) {
      this.suitcases[i] = new Image();
      this.suitcases[i].src = '../../assets/suitcases/maleta-' + (i + 1).toString() + '.svg';
      //this.suitcases[i].onload = () => { console.log('loaded' + i); };
    }

    // get the context
    const cx = this.cx;

    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    // we'll implement this method to start capturing mouse events
    this.captureEvents(this.canvasEl);
  }

  private draw() {
    this.cx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);

    for (let i = 0; i < this.dropZones.length; i++) {
      this.cx.fillStyle = '#dadada';
      this.cx.fillRect(
        this.dropZones[i].getCoordinates().x,
        this.dropZones[i].getCoordinates().y,
        this.dropZones[i].getWidthAndHeight().width,
        this.dropZones[i].getWidthAndHeight().height
      );
    }
    const colors = ['#8ececf', '#b7d8aa', '#ffde4a', '#d1b8c7'];
    for (let i = 0; i < this.dragObjects.length; i++) {
      if (this.suitcases != null && this.suitcases[i] != null) {
        this.cx.drawImage(
          this.suitcases[i],
          this.dragObjects[i].getCoordinates().x,
          this.dragObjects[i].getCoordinates().y,
          this.dragObjects[i].getWidthAndHeight().width,
          this.dragObjects[i].getWidthAndHeight().height
        );
      }
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
    const currentPos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    this.isDragging = false;
    for (let i = 0; i < this.dragObjects.length; i++) {
      if (this.dragObjects[i].isDropped()) { continue; }
      if (this.dragObjects[i].contains(currentPos.x, currentPos.y)) {
        this.isDragging = true;
        this.dragObjects[i].drag();
      }
    }
    this.position = currentPos;

  }

  private myUp(e) {
    e.preventDefault();
    e.stopPropagation();

    // clear all the dragging flags
    for (let i = 0; i < this.dropZones.length; i++) {
      if (this.dropZones[i].isFull()) { continue; }
      if (this.dropZones[i].contains(this.position.x, this.position.y)) {
        this.dropZones[i].fill();
        for (let j = 0; j < this.dragObjects.length; j++) {
          if (this.dragObjects[j].isDragging()) {
            this.dragObjects[j].drop();
            this.drop(this.dragObjects[j], this.dropZones[i]);
            this.counterSuitcase++;
            if (this.counterSuitcase >= 4) {
              console.log('DONE');
              this.finishLoadSuitcase.emit();
            }
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
      const currentPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      // calculate the distance the mouse has moved
      // since the last mousemove
      const dx = currentPos.x - this.position.x;
      const dy = currentPos.y - this.position.y;

      // move each rect that isDragging
      // by the distance the mouse has moved
      // since the last mousemove
      for (let i = 0; i < this.dragObjects.length; i++) {
        const r = this.dragObjects[i];
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

  drop(draggedObject, dropZone) {
    // console.log(draggedObject.isDropped());
    draggedObject.setCoordinates(
      dropZone.getCoordinates().x,
      dropZone.getCoordinates().y
    );
    this.draw();
    // this.animate(draggedObject, dropZone);
  }

  animate(draggedObject, dropZone) {
    if (
      !draggedObject.getCoordinates().x === dropZone.getCoordinates().x ||
      !draggedObject.getCoordinates().y === dropZone.getCoordinates().y
    ) {
      const mx = dropZone.getCoordinates().x - draggedObject.getCoordinates().x;
      const my = dropZone.getCoordinates().y - draggedObject.getCoordinates().y;
      console.log(mx, my);
      if (mx < 0 && my < 0) {
        draggedObject.setCoordinates(
          draggedObject.getCoordinates().x + mx / -mx,
          draggedObject.getCoordinates().y + my / -my
        );
      } else if (mx > 0 && my < 0) {
        draggedObject.setCoordinates(
          draggedObject.getCoordinates().x + mx / mx,
          draggedObject.getCoordinates().y + my / -my
        );
      } else if (mx < 0 && my > 0) {
        draggedObject.setCoordinates(
          draggedObject.getCoordinates().x + mx / -mx,
          draggedObject.getCoordinates().y + my / my
        );
      } else if (mx > 0 && my > 0) {
        draggedObject.setCoordinates(
          draggedObject.getCoordinates().x + mx / mx,
          draggedObject.getCoordinates().y + my / my
        );
      } else if (mx === 0 && my < 0) {
        draggedObject.setCoordinates(
          draggedObject.getCoordinates().x,
          draggedObject.getCoordinates().y + my / -my
        );
      } else if (mx === 0 && my > 0) {
        draggedObject.setCoordinates(
          draggedObject.getCoordinates().x,
          draggedObject.getCoordinates().y + my / my
        );
      } else if (mx < 0 && my === 0) {
        draggedObject.setCoordinates(
          draggedObject.getCoordinates().x + mx / -mx,
          draggedObject.getCoordinates().y
        );
      } else if (mx > 0 && my === 0) {
        draggedObject.setCoordinates(
          draggedObject.getCoordinates().x + mx / mx,
          draggedObject.getCoordinates().y
        );
      }

      this.draw();

      this.loop = requestAnimationFrame(
        this.animate.bind(this)(draggedObject, dropZone)
      );
    } else {
      cancelAnimationFrame(this.loop);
    }
  }
}
