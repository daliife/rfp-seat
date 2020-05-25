import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-wrapper',
  templateUrl: './video-wrapper.component.html',
  styleUrls: ['./video-wrapper.component.css']
})
export class VideoWrapperComponent implements OnInit {

  @Input() youtubeUrl: string;

  @Input() videoUrl: string;

  constructor() {}

  ngOnInit(): void {}

  isYoutubeVideo() {
    return this.youtubeUrl !== undefined;
  }

}
