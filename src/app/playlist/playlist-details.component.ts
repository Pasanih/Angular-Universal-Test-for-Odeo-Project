import { Component,Injectable, Inject, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd,NavigationStart, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { Title,DOCUMENT } from '@angular/platform-browser';

import { Playlist } from '../playlist';
import { PeopleService } from '../people.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'playlist-details',
  templateUrl: 'playlist-details.component.html'
})
export class PlaylistDetailsComponent implements OnInit {
    playlist: Playlist[] = [];

    
  constructor(private appcomp:AppComponent,private peopleService : PeopleService) { }

  ngOnInit() {
    this.appcomp.setTitle(' Playlist | ODEO FM');
    //this.appcomp.setmetadetails('odeo-test-angular2.herokuapp.com','odeo angular artist','from contact details','http://odeo.fm/resources/trackimage/T016667.jpg');
    
    this.peopleService
      .getplaylistsnew()
      .subscribe(
         /* happy path */ p => this.playlist = p,)
         /* error path */ //e => this.errorMessage = e,
         /* onComplete */ //() => this.isLoading = false);

   
  }


}
