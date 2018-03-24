import { Component, OnInit,Input } from '@angular/core';

import {VideoModel} from './shared/video-model'

import {DataService} from './shared/data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  private dados: any[]
  

  constructor( private dataService: DataService) { }

  ngOnInit() {
    
    this.dataService.API.subscribe( data => this.dados = data );
    console.log(this.dados)
  }

}
