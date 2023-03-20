import { Injectable, Inject,Component, OnInit,Input } from '@angular/core';
import { Router, NavigationEnd,NavigationStart, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { Title,DOCUMENT } from '@angular/platform-browser';

import { Track } from '../trackdetails';
import { Playlist } from '../playlist';
import { PeopleService } from '../people.service';

import {AppComponent} from '../app.component';

@Component({
  selector: 'playlist-traks',
  templateUrl: 'playlist-tracks.html'
})
export class PlaylistTraksDetails implements OnInit {
    playlist: Playlist;
      playlist2: Playlist[] = [];
    sub: any;
    @Input() playlist_id:string ;
    
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

            this.playlist_id=id;
            this.getPlaylistDetails(id).subscribe(_ => {;console.log('ngOnit after getUsers() ' + this.playlist);});

           /* this.peopleService
            .getPerson(id)
            .subscribe(p => this.person = p); */
           

            this.peopleService
            .getplayliststracks(id)
            .subscribe(/* happy path */ p => this.playlist2 = p);
          
            
       
        });
    }

   

    gotoPlaylists(){
        let link = ['/playlist'];
        this.router.navigate(link);
    }

    getPlaylistDetails(id) {
    return this.peopleService
    .getPlaylistDetails(id)
    .map(
      (playlist) => {
        //console.log('person ' +  person.status);
        this.playlist = playlist;

        this.appcomp.setTitle(this.playlist.title +' | ODEO FM');

        //this.appcomp.setmetadetails(this.playlist.url,this.playlist.title,this.playlist.title,this.playlist.thumb[0]);
       // alert(this.titleService.getTitle());
       //this.titleService.setTitle(this.person.title +' | ODEO FM');
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
