import {
  Component,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  EventEmitter,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';

import { MyRect } from './rectangle.component';

@Component({
  selector: 'app-second-scene',
  templateUrl: './second-scene.component.html',
  styleUrls: ['./second-scene.component.css'],
})
export class SecondSceneComponent implements AfterViewInit {
  // a reference to the canvas element from our template
  @ViewChild('canvas') public canvas: ElementRef;

  @Input() public width;

  @Input() public height;

  @Output() discoverPath = new EventEmitter<any>();

  currentFrame = 0;

  updateInterval = 100; // in ms

  timeoutHandler;

  deltaFrame = 5;

  showingSpeedometer = true;

  private canvasEl: HTMLCanvasElement;

  private cx: CanvasRenderingContext2D;

  public ngAfterViewInit() {
    this.width = document.getElementById('canvas').offsetWidth;
    this.height = document.getElementById('second-scene-minigame').offsetHeight; // document.getElementById('canvas').offsetHeight;
    // get the context
    this.canvasEl = this.canvas.nativeElement;
    this.cx = this.canvasEl.getContext('2d');

    const cx = this.cx;

    // set the width and height
    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;

    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    const url = '../../assets/forest/borrable.png';

    const img = new Image();
    img.src = url;
    img.onload = () => {
      cx.drawImage(img, 0, 0, this.canvasEl.width, this.canvasEl.height);
    };

    // we'll implement this method to start capturing mouse events
    this.captureEvents(this.canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove').pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
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
    const rect = new MyRect(
      this.canvasEl.width / 2 + this.canvasEl.width / 9,
      this.canvasEl.height - 150,
      this.canvasEl.width / 9,
      150
    );

    // incase the context is not set
    if (!this.cx) {
      return;
    }

    this.cx.globalCompositeOperation = 'destination-out';

    // start our drawing path
    this.cx.beginPath();

    // we're drawing lines so we need a previous position
    if (prevPos) {
      this.cx.arc(currentPos.x, currentPos.y, 10, 0, 2 * Math.PI);
      this.cx.fill();

      this.cx.lineWidth = 100;
      this.cx.beginPath();
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();

      if (rect.contains(currentPos.x, currentPos.y)) {
        this.discoverPath.emit();
        this.canvas.nativeElement.classList.add('slow-hide');
        $('#speedometer').addClass('slow-hide');
        this.showingSpeedometer = false;
      }
    }
  }

  mouseup() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = setInterval(() => {
        if (this.currentFrame - this.deltaFrame >= 0) {
          this.currentFrame = this.currentFrame - this.deltaFrame;
        }
        const newPath =
          '../../assets/speedometer/' +
          (Math.floor(this.currentFrame / 10) + 1) +
          '.png';
        $('#speedometer').attr('src', newPath);
      }, this.updateInterval);
    }
  }

  mousedown() {
    clearInterval(this.timeoutHandler);
    this.timeoutHandler = setInterval(() => {
      if (this.currentFrame + this.deltaFrame < 100) {
        this.currentFrame = this.currentFrame + this.deltaFrame;
      }
      const newPath =
        '../../assets/speedometer/' +
        (Math.floor(this.currentFrame / 10) + 1) +
        '.png';
      $('#speedometer').attr('src', newPath);
    }, this.updateInterval);
  }

  mousemove(e) {
    if (this.showingSpeedometer) {
      const x = e.clientX - this.canvasEl.getBoundingClientRect().left;
      const y = e.clientY - this.canvasEl.getBoundingClientRect().top;
      $('#speedometer').css(
      {
        left: x + 25,
        top: y,
      });
    }
  }
}
