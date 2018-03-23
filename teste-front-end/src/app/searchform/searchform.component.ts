import { Component, OnInit, Input } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

import {VideoService} from '../shared/video.service'
import {VideoModel} from '../shared/video-model'


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
			transition('top => down', animate('300ms ease')),
    ]),

	],
	providers: [VideoService]
})
export class SearchformComponent implements OnInit {
	
	
	private state: string = 'down';
	//@Input() pesquisa: string;
	private myform: FormGroup;
	public pesquisa: FormControl
	public listVideos: VideoModel;

	constructor( 
		private videoService: VideoService,
		//private formBuilder: FormBuilder,
	 ) { }

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
		console.log(formValue);
		
		this.videoService.searchVideo(formValue)
			.subscribe((data: VideoModel) =>
				{
					this.listVideos = data;
					console.log(this.listVideos)
				},
				error => console.log(error)
			);
			

	}

}
