import { Component, OnInit } from '@angular/core';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reloadBtn;
  timerEl;

  constructor() { }

  ngOnInit(): void {
    // PARALLAX
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene,
    {
      relativeInput: true,
      hoverOnly: true,
      frictionY: 0.075,
      frictionX: 0.075,
      limitY: 1000,
      limitX: 0
    });
  }
}
