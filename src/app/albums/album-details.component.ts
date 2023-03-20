import { Injectable, Inject,Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd,NavigationStart, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { Title,DOCUMENT } from '@angular/platform-browser';

import { Album } from '../album';
import { Track } from '../trackdetails';
import { PeopleService } from '../people.service';

import {AppComponent} from '../app.component';

@Component({
  selector: 'album-details',
  templateUrl: 'album-details.component.html'
})
export class AlbumDetailsComponent implements OnInit, OnDestroy {
  @Input() like_count:string = "wadee hari - welma";
    album: Album;
    //person2: Track;
    movies = Object;
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

          //alert(id);
          console.log('getting person with id: ', id);
          //this.peopleService
           // .get(id)
           // .subscribe(p => this.person = p);
           //this.getUsers(id);

             this.peopleService.fetchData(id).subscribe(
           (data) => this.movies = data
         );

            //this.getAlbums(id).subscribe(_ => {;console.log('ngOnit after getUsers() ' );});

          
          /*  this.peopleService
            .getrecTracks(id)
            .subscribe(p => this.person2 = p); */
          
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
      /*
      this.peopleService
          .save(this.album)
          .subscribe(
            (r: Response) => {console.log('success');}
          ); 
      */
    }

    testfunc(){
     //console.log('success123');
      //  alert('wadeee haaariii');

    }

    getAlbums(id) {
    return this.peopleService
    .getalbumdetails(id)
    .map(
      (album) => {
        //console.log('Album ' +  this.album.album_id);
        //this.album = album;

        //this.appcomp.setTitle(this.album.title +' | ODEO FM');



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
