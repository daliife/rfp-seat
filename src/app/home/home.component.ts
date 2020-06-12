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
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene,
    {
      relativeInput: true,
      hoverOnly: true,
      frictionY: 0.15,
      frictionX: 0.15,
      limitY: false,
      limitX: 0
    });
  }
}
