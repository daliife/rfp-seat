import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "rfp-seat-website";
  @Input() discoveringPathSuccess: boolean = true;
  @Input() dragAndDropSuccess: boolean = false;

  discoverPath() {
    this.discoveringPathSuccess = true;
  }
}
