import { Component, OnInit, Input } from '@angular/core';
import {PageEvent} from '@angular/material';
import {PaginatorModel} from '../shared/model/paginator.model'
import {VideoService} from '../shared/services/video.service'
import {DataService} from '../shared/services/data.service'


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit{

  constructor(private videoService: VideoService, private dataService: DataService) { }

    @Input() paginator : PaginatorModel
    @Input() public videosearch: string;
    private pageindex: number = 0

    ngOnInit(){
      console.log(this.videosearch)
      //this.dataService.videosearch.subscribe(data => this.videosearch = data)
    }

    private pageEvent($event){
      console.log(this.paginator)

      let pagetoken = $event['pageIndex'] > this.pageindex ? this.paginator.nextpagetoken : this.paginator.prevpagetoken
      this.pageindex = $event['pageIndex']

      this.videoService.nextPageVideo(this.videosearch, pagetoken)
			.subscribe((data) =>
				{
					this.dataService.API.next( this.videoService.filterData(data));
				},
				error => console.log(error)
			);
    }
}
