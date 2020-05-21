import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-placeholder',
  templateUrl: './content-placeholder.component.html',
  styleUrls: ['./content-placeholder.component.css']
})
export class ContentPlaceholderComponent implements OnInit {

  @Input() num: number;

  constructor() { }

  ngOnInit(): void {
  }

}
