import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'tracks',
    component: PeopleListComponent,
    data: { title: '123123 | odeo-test' }
  },
  // map '/persons/:id' to person details component
  {
    path: 'tracks/:id',
    component: PersonDetailsComponent,
    data: { title: 'sfsdfsdf | odeo-test' }
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/tracks',
    pathMatch: 'full',
    data: { title: '345dg | odeo-test' }
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);

