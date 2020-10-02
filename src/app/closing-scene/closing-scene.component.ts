import { Component } from '@angular/core';

@Component({
  selector: 'app-closing-scene',
  templateUrl: './closing-scene.component.html',
  styleUrls: ['./closing-scene.component.css'],
})
export class ClosingSceneComponent {
  disabledButtons: boolean[];

  constructor() {
    this.disabledButtons = [false, true, true];
  }

  nextStep(step: number) {
    for (let i = 0; i <= step; i++) {
      this.disabledButtons[i] = false;
    }
  }

  resetButtonsState() {
    this.disabledButtons = [false, false, false];
  }
}
