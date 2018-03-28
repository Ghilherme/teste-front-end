import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/services/data.service'

@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.component.html',
  styleUrls: ['./videopage.component.scss']
})
export class VideopageComponent implements OnInit {

  private videos: any[]
  private videosearch: string

  constructor( private dataService: DataService) {}

  ngOnInit() {
    this.dataService.API.subscribe(data => this.videos = data );
    this.dataService.videosearch.subscribe(data => this.videosearch= data)
  }

}
