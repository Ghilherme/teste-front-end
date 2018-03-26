import { Component, OnInit } from '@angular/core';
import VideoModel from '../shared/video-model';

@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.scss']
})
export class VideodetailComponent implements OnInit {

  private video: VideoModel;
  constructor() { }

  ngOnInit() {
  }

}
