import { Component, OnInit } from '@angular/core';
import Parallax from 'parallax-js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
    parallaxInstance.friction(0.2, 0.2);
  }


}
