import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-car-scroller',
  templateUrl: './car-scroller.component.html',
  styleUrls: ['./car-scroller.component.css']
})
export class CarScrollerComponent implements OnInit {

  scrollPercentage = 0;
  movableHeight: number;

  constructor() { }

  ngOnInit(): void {
    // const middlePercentage = (((1920 / 2 - $('.movable').width() / 2) / 1920) * 100) + '%';
    $('.movable').css({top: '5%'});
    this.movableHeight = $('.movable').height();
    this.updateMovable();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.scrollPercentage = this.refreshPercentage();
  }

  @HostListener('window:scroll', ['$event'])
  doSomethingOnWindowsScroll($event: Event) {
    this.scrollPercentage = this.refreshPercentage();
    this.updateMovable();
  }

  private refreshPercentage(): number {
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - this.movableHeight;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const documentHeight = $(document).height();
    const scrollPositionRelative = scrollPosition / (documentHeight - viewportHeight);
    return scrollPositionRelative;
  }

  updateMovable() {
    const percentage = (this.scrollPercentage * 100) + '%';
    $('.movable').css({left: percentage});
  }

}
