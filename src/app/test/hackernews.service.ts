import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'https://node-hnapi.herokuapp.com';

@Injectable()
export class HackerNewsService {

  constructor(private http: Http) { }

  getLatestStories(page: number = 1) {
    //return this.http.get(`${BASE_URL}/news?page=${page}`);
    
    //return this.http.get('http://odeoapi.dev/api/tracks/new?token=e2594bee5609f774a4909f1f68cb5149'); //OOKKK

    return this.http.get('./assets/jsondata/test.json');

   //return this.http.get('http://m.odeo.fm/api/tracks/new?token=a1e3c7abbd7d2dc25acb930880018c5f');
   
  }
}
