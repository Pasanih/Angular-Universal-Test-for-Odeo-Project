import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Person } from './person';
import {Track} from './trackdetails';


@Injectable()
export class PeopleService{
  private baseUrl: string = 'http://odeoapi.dev/api';

  constructor(private http : Http){
  }

  getAll(): Observable<Person[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/tracks/new`, {headers: this.getHeaders()})
      .map(mapPersons)
      .catch(handleError);
      return people$;
  }

  get(id: number): Observable<Track> {
    let person$ = this.http
      //.get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .get(`${this.baseUrl}/tracks/info/${id}`, {headers: this.getHeaders()})
      .map(mapPerson);
      return person$;
  }

  getPerson(id:number):Observable<Track> {
               return this.http.get(`${this.baseUrl}/tracks/info/${id}`, {headers: this.getHeaders()})
                  .map((res:Response) => res.json());
        }

  save(person: Person) : Observable<Response>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    return this.http
      .put(`${this.baseUrl}/tracks/info/${person.track_id}`, JSON.stringify(person), {headers: this.getHeaders()});
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapPersons(response:Response): Person[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().Tracks.map(toPerson)
}

function toPerson(r:any): Person{
  let person = <Person>({
   // id: extractId(r),
    track_id: r.track_id,
    artist_name: r.artist_name,
    thumb: r.thumb,
    url: r.url,
    title: r.title,
  });
  console.log('Parsed person:', person);
  return person;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
  let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
  return parseInt(extractedId);
}

//function mapPerson(response:Response): Person{
  // toPerson looks just like in the previous example
  //return toPerson(response.json());
//}


function mapPerson(response:Response): Track{
  // toPerson looks just like in the previous example
    //return response.json().Track.map(toTrack)
    return response.json().Track.recTracks.map(toTrack)
    //return response.json()
}

function toTrack(r:any): Track{
  let person = <Track>({
   // id: extractId(r),
    track_id: r.track_id,
    artist_name: r.artist_name,
    thumb: r.thumb,
    url: r.url,
    title: r.title,
  });
  console.log('Parsed person:', person);
  return person;
}




// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
