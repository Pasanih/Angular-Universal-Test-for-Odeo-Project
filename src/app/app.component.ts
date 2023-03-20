import { Injectable, Inject,Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation, OnInit,AfterViewInit } from '@angular/core';
import { Title, DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
//import { MetaConfig, MetaService } from 'ng2-meta';

import { Meta } from '../angular2-meta';


import { PeopleService } from './people.service';
import { HackerNewsService } from './test/hackernews.service';
import { InfiniteScrollerDirective } from './test/infinite-scroller.directive';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


//declare var jQuery: any;
declare var $: any;
//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[xLarge]'
})
export class XLargeDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}


        /*
        @Injectable()
        export class InterfaceService {    
            //--------------------------------------------
            //! Set the variables to their default values
            //--------------------------------------------
            constructor (@Inject(DOCUMENT) private document) {
            }

            //----------------------------
            //! Set the title of the page
            //----------------------------
            setTitle (title: string) {
                this.document.title = 'title'
            }
        }
        */


@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  templateUrl: './app.component.html',
  providers: [PeopleService,HackerNewsService]
})
export class AppComponent implements OnInit {
  //title = 'Odeo Tracks';
  constructor(
    private router: Router, 
    private titleService: Title,
    private activatedRoute: ActivatedRoute, private renderer: Renderer,private meta:Meta,
    @Inject(DOCUMENT) private document
  ) {}
  ngOnInit() {


    let headChildren = this.document.head.children;
    for (let i = 0; i < headChildren.length; i++) {
      let element = headChildren[i];
      //if(element.name === 'title') this.renderer.setText(element, 'App title');
      if(element.name === 'meta' && element.attribs.translatestring) this.renderer.setElementAttribute(element, 'content', 'I am a translated string');
    }


    // To add new meta
    

    //this.meta.addTags();

    //<meta property="og:image" content="http://www.odeo.fm/images/OdeoCover.jpg" />

    //this.setTitle('from app.component');

     //this.document.title = 'Anguler Router in action';
    /*this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      
     .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.titleService.setTitle(event['title'])
        console.log(event['title']);
        //console.log('NavigationEnd:', event);
      });
      */
      
  }

  open()
    {
      var sideslider = $('[data-toggle=collapse-side]');
      var sel = sideslider.attr('data-target');
      var sel2 = sideslider.attr('data-target-2');
          // $('.overlay').show();
        
                $(sel).toggleClass('in');
               $(sel2).toggleClass('out');
           

  }
  chkmenu()
  {

  }



  setTitle (title: string) {
                this.document.title = title
            }

  setmetadetails(ogurl:string,ogtitle:string,ogdescription:string,ogimage:string)
      {

        const elemogimage = this.renderer.createElement(this.document.head, 'meta');
        this.renderer.setElementProperty(elemogimage, 'property', 'og:image');
        this.renderer.setElementAttribute(elemogimage, 'content', ogimage);

        const elemogtitle = this.renderer.createElement(this.document.head, 'meta');
        this.renderer.setElementProperty(elemogtitle, 'property', 'og:title');
        this.renderer.setElementAttribute(elemogtitle, 'content', ogtitle);

        const elemogdescription = this.renderer.createElement(this.document.head, 'meta');
        this.renderer.setElementProperty(elemogdescription, 'property', 'og:description');
        this.renderer.setElementAttribute(elemogdescription, 'content', ogdescription);

        const elemogurl = this.renderer.createElement(this.document.head, 'meta');
        this.renderer.setElementProperty(elemogurl, 'property', 'og:url');
        this.renderer.setElementAttribute(elemogurl, 'content', ogurl);

      }
}
