import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "rfp-seat-website";
  @Input() discoveringPathSuccess: boolean;
  @Input() dragAndDropSuccess: boolean = false;

  @Input() discoveringPathSuccess: boolean = true;

  discoverPath() {
    this.discoveringPathSuccess = true;
  }
}
