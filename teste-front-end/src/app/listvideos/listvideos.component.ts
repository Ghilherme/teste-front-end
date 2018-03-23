import { Component, OnInit, Input } from '@angular/core';

import {VideoModel} from '../shared/video-model';

@Component({
  selector: 'app-listvideos',
  templateUrl: './listvideos.component.html',
  styleUrls: ['./listvideos.component.scss']
})
export class ListvideosComponent implements OnInit {

  @Input() video: VideoModel;

  constructor() { }

  ngOnInit() {
  }

}
