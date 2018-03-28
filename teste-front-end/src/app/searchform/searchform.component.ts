import { Component, OnInit, Input, Output } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { trigger,state,style,transition,animate,keyframes, query } from '@angular/animations';

import {VideoService} from '../shared/services/video.service'
import VideoModel from '../shared/model/video-model'
import {DataService} from '../shared/services/data.service'


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
	styleUrls: ['./searchform.component.scss'],
	
	animations: [
		trigger('transitionToTOP', [
			state('down', style({
					transform: 'translateY(100px)',
			})),
			state('top', style({
					transform: 'translateY(-100px)',
			})),
			transition('down => top', animate('300ms ease')),
			transition('top => down',animate('300ms ease')),
    ]),
	],
	providers: [VideoService]
})
export class SearchformComponent implements OnInit {
	
	
	private state: string = 'down';
	private myform: FormGroup;
	public pesquisa: FormControl

	constructor(private videoService: VideoService,	private dataService: DataService)
	{	}

	ngOnInit() {
		this.createFormControls();
		this.createForm();
	}

  animateMe(value: string) {
		(value == '' ? this.state = "down" : this.state = "top")
  }

	createFormControls() {
    this.pesquisa = new FormControl('', Validators.required);
	}
	
	createForm() {
    this.myform = new FormGroup({
      pesquisa: this.pesquisa,
    });
  }
	

	buscar() {
		let formValue = this.myform.value;
		
		this.dataService.videosearch.next(formValue.pesquisa)
		
		this.videoService.searchVideo(formValue.pesquisa)
			.subscribe((data) =>
				{
					console.log(data)
					this.dataService.API.next( this.videoService.filterData(data));
				},
				error => console.log(error)
			);
	}

}
