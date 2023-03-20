import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: PeopleListComponent, data: { title: 'Home | odeo-test' } },
      { path: 'about', component: AboutComponent, data: { title: 'About | odeo-test' } },
      { path: 'contact', component: ContactComponent, data: { title: 'Contact | odeo-test' } },
      { path: 'tracks/:id',component: PersonDetailsComponent, data: { title: 'route details | odeo-test' } },

    ])
  ],
})
export class AppRoutingModule { }
