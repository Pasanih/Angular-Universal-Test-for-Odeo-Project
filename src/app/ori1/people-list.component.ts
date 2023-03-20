import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  //moduleId: module.id,
  selector: 'people-list',
  /*template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let person of people">
            <a href="#" [routerLink]="['/persons', person.track_id]">

          <img src="{{person.thumb}}" width="150" height="150" >  
          {{person.title}}  -- By {{person.artist_name}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
  */
  styleUrls: [ 'app.component.css' ],
  //styles: [require('./track-card.scss')],

 
template: `
    <section class="aaa">
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let person of people">
            <a href="#" [routerLink]="['/tracks', person.track_id]">

          <img src="{{person.thumb}}" width="150" height="150" >  
          {{person.title}}  - By {{person.artist_name}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
   
  `


})
export class PeopleListComponent implements OnInit{
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService : PeopleService){ }

  ngOnInit(){
    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}
