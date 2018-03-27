import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import VideoModel from '../shared/model/video-model'
import {VideoService} from '../shared/services/video.service'
import {DataService} from '../shared/services/data.service'

@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.scss']
})
export class VideodetailComponent implements OnInit {

  private video: VideoModel;
  private routeID: string;
  constructor( private VideoService : VideoService, private activatedRoute : ActivatedRoute)
  { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.routeID = params['id']
    )

    this.VideoService.getVideo(this.routeID)
    .subscribe(data => {
      console.log(this.routeID)
      console.log(data)
      this.video = {
        id: data['items'][0].id,
        title: data['items'][0].snippet.title,
        description: data['items'][0].snippet.description,
        thumbnail: (`https://www.youtube.com/embed/${data['items'][0].id}`),
        channelTitle: data['items'][0].snippet.channelTitle,
        statistics: data['items'][0].statistics
      }
    }) 
  }

}
