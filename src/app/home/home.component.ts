import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { Person } from './../person';
import { PeopleService } from './../people.service';
import { PersonDetailsComponent } from './../person-details.component';

@Component({
  selector: 'track-details',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService : PeopleService,private appcomp:AppComponent){ }

  ngOnInit(){

    this.appcomp.setTitle(' Home | ODEO FM');
   // this.appcomp.setmetadetails('odeo-test-angular2.herokuapp.com','odeo test angular track','from home details','http://odeo.fm/resources/trackimage/T025320.jpg');

    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }

}
