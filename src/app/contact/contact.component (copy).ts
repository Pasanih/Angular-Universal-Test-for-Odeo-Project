import { Component, OnInit, AfterViewInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { PeopleService } from '../people.service';
import { Artist } from '../artist';

declare var jQuery: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,AfterViewInit {
	artist: Artist[] = [];

   arr: Array<Object >;

	errorMessage: string = '';
    isLoading: boolean = true;

  constructor(private appcomp:AppComponent,private peopleService : PeopleService) { }

  ngOnInit() {
  	this.appcomp.setTitle(' Artist | ODEO FM');
    //this.appcomp.setmetadetails('odeo-test-angular2.herokuapp.com','odeo angular artist','from contact details','http://odeo.fm/resources/trackimage/T016667.jpg');
  	
  	this.peopleService
      .getartistsnew()
      .subscribe(
         /* happy path */ p => this.artist = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);

     // this.arr = [this.artist[0],this.artist[0],this.artist[0],this.artist[0],this.artist[0]];
  }

//: void 
  ngAfterViewInit(){
    jQuery('.owl-carousel').owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 5
                  }
                }
              }) ; 
}

}
