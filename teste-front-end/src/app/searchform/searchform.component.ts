import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss']
})
export class SearchformComponent implements OnInit {
  reqFormControl = new FormControl('', [
    Validators.required,
  ]);


	@Input() pesquisa: string;
	private form: FormGroup;

	constructor( 
		private formBuilder: FormBuilder,
		//private videoService: VideoService,
    //private dataStorage: DataStorage
   )
   { }

	ngOnInit() {
		this.initForm();
	}

	private initForm() {
		this.form = this.formBuilder.group({
			pesquisa: ['', [
			Validators.required
			]]
		});
	}

	buscar() {
		let formValue = this.form.value;

    /*
		this.dataStorage.carregando.next( true );
		this.dataStorage.pesquisa.next( formValue.pesquisa );

		this.videoService.show( formValue.pesquisa )
		.subscribe( data => {
			this.dataStorage.apiYouTube.next( this.videoService.dataMask( data ) );
			this.dataStorage.carregando.next( false );
    });
    */
	}

}
