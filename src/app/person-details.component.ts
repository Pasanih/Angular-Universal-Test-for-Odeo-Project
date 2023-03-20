import { Injectable, Inject,Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd,NavigationStart, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { Title,DOCUMENT } from '@angular/platform-browser';

import { Person } from './person';
import { Track } from './trackdetails';
import { PeopleService } from './people.service';

import {AppComponent} from './app.component';

@Component({
  selector: 'person-details',
  templateUrl: 'person-details.component.html'
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  @Input() like_count:string = "wadee hari - welma";
    person: Track;
    person2: Track;
    sub: any;
    
    constructor(private peopleService: PeopleService,
                private route: ActivatedRoute,private appcomp:AppComponent,
                private router: Router,private titleService: Title,@Inject(DOCUMENT) private document){
    }

    ngOnInit(){
      //alert(this.route);
        this.sub = this.route.params.subscribe(params => {
          //let id = Number.parseInt(params['id']);
          let id = params['id'];
          //this.titleService.setTitle(id);

         // alert(id);
          console.log('getting person with id: ', id);
          //this.peopleService
           // .get(id)
           // .subscribe(p => this.person = p);
           //this.getUsers(id);


            this.getUsers(id).subscribe(_ => {;console.log('ngOnit after getUsers() ' + this.person);});

           /* this.peopleService
            .getPerson(id)
            .subscribe(p => this.person = p); */
            this.peopleService
            .getrecTracks(id)
            .subscribe(p => this.person2 = p);
          
            //.subscribe(p => this.tracks = p);
       
        });
    }

    ngOnDestroy(){
        //this.sub.unsubscribe();
    }

    gotoPeoplesList(){
        let link = ['/home'];
        this.router.navigate(link);
    }

    savePersonDetails(){
      this.peopleService
          .save(this.person)
          .subscribe(
            (r: Response) => {console.log('success');}
          );
    }

    testfunc(){
     //console.log('success123');
      //  alert('wadeee haaariii');

    }

    getUsers(id) {
    return this.peopleService
    .getPerson(id)
    .map(
      (person) => {
        //console.log('person ' +  person.status);
        this.person = person;

        this.appcomp.setTitle(this.person.title +' | ODEO FM');

        this.appcomp.setmetadetails(this.person.url,this.person.title,this.person.title,this.person.thumb[0]);
       // alert(this.titleService.getTitle());
       //this.titleService.setTitle(this.person.title +' | ODEO FM');

    /*   this.router.events.subscribe(path => {
        console.log('path = ', path);
      });

        this.router.events.subscribe((event) => {
        //this.titleService.setTitle(event['title']='123')
        if(event instanceof NavigationStart) {
        var title = this.titleService.getTitle();
        console.log('title', title);
        this.titleService.setTitle('123');
      }
    });

    */

       /*  this.router.events
        .filter(event => event instanceof NavigationEnd)
        .map(() => this.route)
        .map(route => {
         // while (route.firstChild) route = route.firstChild;
         event['title']==this.person.title +' | ODEO FM';
          return route;
        })
        
        .filter(route => route.outlet === 'primary')
        .mergeMap(route => route.data)
        .subscribe((event) => {
        //this.titleService.setTitle(event['title'])

        this.titleService.setTitle(this.person.title +' | ODEO FM');
        console.log(event['title']);
        //console.log('NavigationEnd:', event);
      });
*/


        //console.log('this.person ' + this.person.title);
      })
     .catch((error) => {
        console.log('error ' + error);
        throw error;
      });
    // users => this.users = users,
    // error => this.errorMsg = <any>error);
  }
}
