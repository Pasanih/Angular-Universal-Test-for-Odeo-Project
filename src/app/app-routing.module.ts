import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';

import { AlbumDetailsComponent } from './albums/album-details.component';

import { PlaylistDetailsComponent } from './playlist/playlist-details.component';
import { PlaylistTraksDetails } from './playlist/playlist-tracks.component';

import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: PeopleListComponent, data: { title: 'Home | odeo-test' } },
      { path: 'album', component: AboutComponent, data: { title: 'About | odeo-test' } },
      { path: 'artist', component: ContactComponent, data: { title: 'Contact | odeo-test' } },
       { path: 'test', component: TestComponent, data: { title: 'Test | odeo-test' } },
      { path: 'playlist', component: PlaylistDetailsComponent, data: { title: 'Contact | odeo-test' } },
      { path: 'tracks/:id',component: PersonDetailsComponent, data: { title: 'Contact | odeo-test' } },
      { path: 'album/:id',component: AlbumDetailsComponent, data: { title: 'Contact | odeo-test' } },
      { path: 'playlist/:id', component: PlaylistTraksDetails, data: { title: 'Contact | odeo-test' } },

      { path: '404', component: AboutComponent },
	  { path: '**', component: AboutComponent }

    ])
  ],
})
export class AppRoutingModule { }
