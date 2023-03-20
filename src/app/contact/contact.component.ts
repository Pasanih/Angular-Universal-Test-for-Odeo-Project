import { Component, OnInit,OnDestroy, AfterViewInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { PeopleService } from '../people.service';
import { Artist } from '../artist';

declare var jQuery: any;
declare var Swiper: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy,AfterViewInit {
  //artist: Artist[] = [];
  artist: Artist[] = [];
   //arr: Array<Object >;
   arr: Array<Object >;
   arr2: Array<Object >;

  errorMessage: string = '';
    isLoading: boolean = true;

  constructor(private appcomp:AppComponent,private peopleService : PeopleService) { }

  ngOnInit() {



 /*   $(document).ready(function(){

       var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });
  });
  */

    this.appcomp.setTitle(' Artist | ODEO FM');
    //this.appcomp.setmetadetails('odeo-test-angular2.herokuapp.com','odeo angular artist','from contact details','http://odeo.fm/resources/trackimage/T016667.jpg');
    
    this.peopleService
      .getartistsnew()
      .subscribe(

        //artist => this.artist = artist,
        //error => this.errorMessage = <any>error

         /* happy path */ //p => this.artist = p,
         /* error path */ //e => this.errorMessage = e,
         /* onComplete */ //() => this.isLoading = false

         (value) => {  //alert(value);
          //this.arr = [value[1].title,value[1].title];
          this.arr.push(value);
          this.artist = value;
          //this.arr = [value[0].title,value[1].title,value[2].title];
           //alert(value[1].title);
        ////  for (var i = 0; i < 10; i++) {
   // $('.swiper-wrapper').append('<div class="swiper-slide">Slide ' + i + '</div>');
//}
              }
         );


   /*  this.peopleService
      .getartistsnew()
      .subscribe(
         (value) => { 
    
        alert(value);
      });
  */
  
 //this.arr = [{"title":"Kasun Kalhara Jayawardhana","subtitle":"","artist_id":"Artist57852","thumbs":"http://odeo.fm/resources/cover_pics/artist/Artist57852.jpg"},
//{"title":"Ruwan Hettiarachchi","subtitle":"","artist_id":"Artist71936","thumbs":"http://odeo.fm/resources/cover_pics/artist/Artist71936.jpg"}];
  //alert(this.arr);
      //this.arr = [this.artist[0],this.artist[0],this.artist[0],this.artist[0],this.artist[0]];
    this.arr = ['012345'];
  }

//: void 
  ngAfterViewInit(){


    /*jQuery('.owl-carousel').owlCarousel({
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
              }) ; */


              jQuery('.owl-carousel').owlCarousel({
              loop:true,
              margin:10,
              responsiveClass:true,
              // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
              responsive:{
                  0:{
                      items:1,
                      nav:true
                  },
                  600:{
                      items:3,
                      nav:false
                  },
                  1000:{
                      items:5,
                      nav:true,
                      loop:false
                  }
              }
          });


}

ngOnDestroy(){
        //this.sub.unsubscribe();
        //jQuery('.owl-carousel').owlCarousel().destroy();
    }

}
