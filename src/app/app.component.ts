import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  @Input() discoveringPathSuccess = true;

  @Input() dragAndDropSuccess = false;

  isNotMobile = true;

  ngOnInit(): void {
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    this.isNotMobile = !isMobileDevice;
  }

  discoverPath() {
    this.discoveringPathSuccess = true;
  }
}
