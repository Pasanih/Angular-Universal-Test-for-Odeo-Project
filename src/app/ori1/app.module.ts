import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { routing } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent]
  //bootstrap: [ AppComponent ]
})
export class AppModule { }

export { AppComponent } from './app.component';
