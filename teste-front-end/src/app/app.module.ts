import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';



import {
  MatAutocompleteModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
} from '@angular/material';

import { SearchformComponent } from './searchform/searchform.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule,

    MatAutocompleteModule,
    MatButtonModule,

    MatInputModule,

    MatToolbarModule,

    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
