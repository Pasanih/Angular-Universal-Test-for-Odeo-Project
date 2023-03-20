import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { HackerNewsService } from './hackernews.service'
import { InfiniteScrollerDirective } from './infinite-scroller.directive';

@Component({
  selector: 'test-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = '';

  currentPage: number = 1;

  news: Array<any> = [];

  scrollCallback;

  constructor(private hackerNewsSerivce: HackerNewsService) {
    this.title = 'Angular Infinite Scroller with RxJS';
    this.scrollCallback = this.getStories.bind(this);
   }

  getStories() {
    return this.hackerNewsSerivce.getLatestStories(this.currentPage).do(this.processData);
  }

  private processData = (news) => {
    this.currentPage++;
    this.news = this.news.concat(news.json()['Tracks']);
  }
}


/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Person } from '../person';
import { PeopleService } from '../people.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService : PeopleService,private appcomp:AppComponent){ }


  ngOnInit(){
    this.peopleService
      .getAll()
      .subscribe(
         p => this.people = p,
         e => this.errorMessage = e,
         () => this.isLoading = false);

       this.appcomp.setTitle(' Home | ODEO FM');
       this.appcomp.setmetadetails('local host','from home','from home','image');
  }

   public fromframesingle( obj1: string, obj2:string) {
    alert(obj1);
  }

}
*/