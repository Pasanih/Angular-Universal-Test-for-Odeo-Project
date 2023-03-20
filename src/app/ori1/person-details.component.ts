import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'person-details',
  templateUrl: 'person-details.component.html'
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
    person: Person;
    sub: any;
    professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

    constructor(private peopleService: PeopleService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
      //alert(this.route);
        this.sub = this.route.params.subscribe(params => {
          //let id = Number.parseInt(params['id']);
          let id = params['id'];
         // alert(id);
          console.log('getting person with id: ', id);
          //this.peopleService
           // .get(id)
           // .subscribe(p => this.person = p);

            this.peopleService
            .getPerson(id)
            .subscribe(p => this.person = p);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoPeoplesList(){
        let link = ['/tracks'];
        this.router.navigate(link);
    }

    savePersonDetails(){
      this.peopleService
          .save(this.person)
          .subscribe(
            (r: Response) => {console.log('success');}
          );
    }
}
