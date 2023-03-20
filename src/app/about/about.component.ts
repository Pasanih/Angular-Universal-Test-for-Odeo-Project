import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { PeopleService } from '../people.service';
import { Album } from '../album';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	album: Album[] = [];
	errorMessage: string = '';
    isLoading: boolean = true;

  constructor(private appcomp:AppComponent,private peopleService : PeopleService) { }

  ngOnInit() {

  	   this.appcomp.setTitle(' Album | ODEO FM');
      // this.appcomp.setmetadetails('odeo-test-angular2.herokuapp.com','odeo angular2 home','from about details','http://odeo.fm/resources/trackimage/T025066.jpg');
  	this.peopleService
      .getalbumsnew()
      .subscribe(
         /* happy path */ p => this.album = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);

  }

}
