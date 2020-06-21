import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-third-scene',
  templateUrl: './third-scene.component.html',
  styleUrls: ['./third-scene.component.css'],
})
export class ThirdSceneComponent implements OnInit {
  flag = false;

  currentImage = 0;

  constructor() {}

  ngOnInit(): void {}

  selectOption(option: number) {
    if (this.currentImage !== option) {
      const newPath = 'assets/roads/camino' + option + '.png';
      const element = document.querySelector('.floating-img');
      if (!this.flag) {
        $('.floating-img').attr('src', newPath);
        element.classList.add('animate__fadeIn');
        this.flag = true;
      } else {
        element.classList.remove('animate__fadeIn');
        element.classList.add('animate__fadeOut');
        element.addEventListener('animationend', () => {
          $('.floating-img').attr('src', newPath);
          element.classList.remove('animate__fadeOut');
        });
      }
      this.currentImage = option;
    }
  }

  fadeIn() {
    if (this.flag) {
      const element = document.querySelector('.floating-img');
      element.classList.add('animate__fadeIn');
    }
  }
}
