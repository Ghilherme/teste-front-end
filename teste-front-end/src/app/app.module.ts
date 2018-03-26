import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'

import {DataService} from './shared/data.service'
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

import { SearchformComponent } from './searchform/searchform.component';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { ListvideosComponent } from './listvideos/listvideos.component';
import { VideoService } from './shared/video.service';
import {RoutingModule} from './app.routing';
import { VideodetailComponent } from './videodetail/videodetail.component';
import { VideopageComponent } from './videopage/videopage.component'


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    SearchformComponent,
    ListvideosComponent,
    VideodetailComponent,
    VideopageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    RoutingModule,
    MatToolbarModule,

    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [DataService, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
