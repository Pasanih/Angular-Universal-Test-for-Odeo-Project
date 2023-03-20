import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Person } from './person';
import { PeopleService } from './people.service';
import {AppComponent} from './app.component';

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

 <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
     <div class="pokeball">
    <div class="upper">
      <div class="inner"></div>
    </div>
    <div class="middle"></div>
    <div class="lower">
      <div class="inner"></div>
    </div>
  </div>
    </section>
    
  <div class="container">
    <section class="aaa">
   


    <div class="cover profile">
              <div class="wrapper">
                <div class="image">
                  <img src="../assets/images/profile-coverO.jpg" alt="people" />
                </div>
                
              </div>
              <div class="cover-info">
                <div class="avatar">
                  <img src="../assets/images/place1.jpg" alt="people" />
                </div>
                <div class="name"><a href="#">ODEO Traks</a></div>
                <ul class="cover-nav">

                  <li><a href="user-public-timeline.html"><i class="fa fa-fw icon-ship-wheel"></i> Timeline</a></li>
                  <li><a href="user-public-profile.html"><i class="fa fa-fw icon-user-1"></i> About</a></li>
                  <li><a href="user-public-users.html"><i class="fa fa-fw fa-users"></i> Friends</a></li>

                </ul>
              </div>
            </div>



    
        <div class="row">
        <div class="col-md-1"></div>
                    <div class="col-md-10 panel">
                      <h3 class="font-thin">New Tracks</h3>
                      <div class="row row-sm">
                        
                        <div *ngFor="let person of people">
                        <div class="col-xs-6 col-sm-2">
                          <div class="item">
                            <div class="pos-rlt">
                              <div class="item-overlay opacity r r-2x bg-black">
                                <div class="center text-center m-t-n">
                                  <a class="player-add-song" id="{{person.track_id}}"><i class="fa fa-play-circle i-2x"></i></a>
                                </div>
                              </div>
                              <a href="#" [routerLink]="['/tracks', person.track_id]"><img src="{{person.thumb}}" alt="" class="r r-2x img-full"></a>

                                  <div class="odo-song-panel r-b">
                                  <ul>
                                      <li><a href="javascript:void(0);" class="add-song-to-queue" attr.aitist="{{person.artist_name}}" attr.link="{{person.url}}" attr.songname="{{person.title}}" attr.song-id="{{person.track_id}}" attr.poster="{{person.thumb}}" title="play"><span class="fa fa-play fa-fw text-center"></span></a>
                                      </li>
                                      <li><a href="javascript:void(0);" class="addToFavorite" song-id="5005" title="like"><span class="fa fa-heart-o text-center"></span></a>
                                      </li>
                                      <li><a href="javascript:void(0);" class="playlist-add-bubble" aitist="Eranda Madusinghe" link="http://fmderana.lk/content/video/fmsongs/Aadareta_Sima_Eranda_Madusinghe.mp3" songname="Aadareta Sima" song-id="5005" poster="http://fmderana.lk/image/data/1484800621Aadareta_Sima_Eranda_Madusinghe1.jpg" title="add to playlist"><span class="fa fa-plus fa-fw text-center"></span></a>
                                      </li>
                                      <li><a href="javascript:void(0);" class="shre-this-audio" aitist="Eranda Madusinghe" link="/audio/5005/aadareta-sima-eranda-madusinghe" songname="Aadareta Sima" song-id="5005" title="share">
                                      <span class="fa fa-share-alt fa-fw text-center"></span></a>
                                      </li>
                                  </ul>
                                  </div>



                            </div>
                            <div class="padder-v">
                              <a href="#" [routerLink]="['/tracks', person.track_id]" class="text-ellipsis">{{person.title}}</a>
                              <a href="#" [routerLink]="['/tracks', person.track_id]" class="text-ellipsis text-xs text-muted">{{person.artist_name}}</a>
                            </div>
                          </div>
                        </div>
                        </div>
                      
                      </div>
                    </div>
                  </div>
        <div class="col-md-1"></div>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  </div>

  <loading-indicator *ngIf="isLoading && !errorMessage"></loading-indicator>
   
  `


})
export class PeopleListComponent implements OnInit{
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService : PeopleService,private appcomp:AppComponent){ }

   /*
     //onclick="fromframesingle('T030790','newreleases');"
    (click)="fromframesingle('T030790','newreleases')"
    public fromframesingle( obj1: string, obj2:string) {
    alert('from component');
  }
  */


  ngOnInit(){
    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);

       this.appcomp.setTitle(' Home | ODEO FM');
       this.appcomp.setmetadetails('local host','from home','from home','image');
  }

   public fromframesingle( obj1: string, obj2:string) {
    alert(obj1);
  }
}
