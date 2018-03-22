import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';



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

	]
})
export class SearchformComponent implements OnInit {
	
	private form: FormGroup;
	private state: string = 'down';

	ngOnInit() {
		this.initForm();
	}

  animateMe(value: string) {
		console.log(value)
				if(value == ''){
					this.state ='down'
				}else{
					this.state = 'top'
				}
  }

	private initForm() {
		this.form = new FormGroup({
			pesquisa: new FormControl('pesquisa',	 Validators.required)
		});
	}

	buscar() {
		//let formValue = this.form.value;
	}

}
