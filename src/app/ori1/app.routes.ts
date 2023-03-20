import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'tracks',
    component: PeopleListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'tracks/:id',
    component: PersonDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/tracks',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
