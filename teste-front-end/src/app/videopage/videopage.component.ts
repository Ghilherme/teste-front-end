import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/services/data.service'
import VideoModel from '../shared/model/video-model';

@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.component.html',
  styleUrls: ['./videopage.component.scss']
})
export class VideopageComponent implements OnInit {

  private videos: any[]
  

  constructor( private dataService: DataService) { }

  ngOnInit() {
    
    this.dataService.API.subscribe( data => this.videos = data );
  }

}
