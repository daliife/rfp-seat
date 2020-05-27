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
    const parallaxInstance = new Parallax(scene, { relativeInput: false });
    parallaxInstance.friction(0.2, 0.2);

    // COUNTER
    this.reloadBtn = document.querySelector('.reload');
    this.timerEl = document.querySelector('.timer');
  }

}
