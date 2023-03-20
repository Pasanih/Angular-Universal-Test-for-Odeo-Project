import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';

import { InfiniteScrollerDirective } from './test/infinite-scroller.directive';

import { AlbumDetailsComponent } from './albums/album-details.component';
import { PlaylistDetailsComponent } from './playlist/playlist-details.component';
import { PlaylistTraksDetails } from './playlist/playlist-tracks.component';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';

import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

import { LoadingIndicatorComponent } from './loading-indicator';

import {ModalComponent} from './modal.component';


@NgModule({
  declarations: [ 
    AppComponent, 
    XLargeDirective,

    HomeComponent,
    AboutComponent,
    TestComponent,
    AlbumDetailsComponent,
    PlaylistDetailsComponent,
    PlaylistTraksDetails,
    ContactComponent,

    PeopleListComponent, PersonDetailsComponent,LoadingIndicatorComponent,InfiniteScrollerDirective,ModalComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';
