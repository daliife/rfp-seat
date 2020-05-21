import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-car-scroller',
  templateUrl: './car-scroller.component.html',
  styleUrls: ['./car-scroller.component.css']
})
export class CarScrollerComponent implements OnInit {

  innerHeight: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.innerHeight = document.documentElement.scrollTop;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = document.documentElement.scrollTop;
  }

  @HostListener('window:scroll', ['$event'])
  doSomethingOnWindowsScroll($event: Event) {
    const scrollOffset = document.documentElement.scrollTop;
    this.innerHeight =document.documentElement.scrollLeft;
    // console.log('window scroll: ', scrollOffset, this.innerHeight);
  }

}
