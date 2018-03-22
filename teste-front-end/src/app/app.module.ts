import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
} from '@angular/material';

import { SearchformComponent } from './searchform/searchform.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,

    MatInputModule,

    MatToolbarModule,

    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
