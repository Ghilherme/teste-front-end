import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'

import {DataService} from './shared/data.service'
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
} from '@angular/material';

import { SearchformComponent } from './searchform/searchform.component';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { ListvideosComponent } from './listvideos/listvideos.component';
import { VideoService } from './shared/video.service';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    SearchformComponent,
    ListvideosComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,

    MatInputModule,

    MatToolbarModule,

    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [DataService, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
