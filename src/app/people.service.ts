import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Person } from './person';
import { Artist } from './artist';
import { Playlist } from './playlist';
import { Album } from './album';
import { Track } from './trackdetails';

@Injectable()
export class PeopleService{
   private baseUrl: string = 'http://odeoapi.dev/api';
  //private baseUrl: string = 'http://m.odeo.fm/api';
  //private baseUrl: string = 'http://localhost:8000';

  constructor(private http : Http){
  }

  getAll(): Observable<Person[]>{
    let people$ = this.http
      //.get(`${this.baseUrl}/tracks/new?token=a1e3c7abbd7d2dc25acb930880018c5f`, {headers: this.getHeaders()})
     // OK .get(`${this.baseUrl}/tracks/new?token=e2594bee5609f774a4909f1f68cb5149`, {headers: this.getHeaders()})

     //.get(`${this.baseUrl}/tracks`, {headers: this.getHeaders()})
     .get(`./assets/jsondata/track.json`, {headers: this.getHeaders()})
      .map(mapPersons);
      //.catch(handleError);
      return people$; 

     /* var credentials = "token=a1e3c7abbd7d2dc25acb930880018c5f"
     let people$ =this.http.post(`${this.baseUrl}/tracks/new`, credentials, {headers: this.getHeaders()})
     .map(mapPersons);
     return people$; */
  }


  getPerson(id:number):Observable<Track> {

     /*return this.http.get(`${this.baseUrl}/tracks/info/${id}`, {headers: this.getHeaders()})
     .map((res:Response) => res.json());  */          
      
      let tracks$ = this.http
      //.get(`${this.baseUrl}/tracks/info/${id}`,{headers: this.getHeaders()})
      //.get(`${this.baseUrl}/tracks/info/${id}?token=a1e3c7abbd7d2dc25acb930880018c5f`,{headers: this.getHeaders()})
      .get(`${this.baseUrl}/tracks/info/${id}?token=e2594bee5609f774a4909f1f68cb5149`,{headers: this.getHeaders()})
      .map(mapPerson); 
      return tracks$;  
      
  }


  getrecTracks(id:number):Observable<Track> {  
      let tracks$ = this.http
      //.get(`${this.baseUrl}/tracks/info/${id}`,{headers: this.getHeaders()})
      //.get(`${this.baseUrl}/tracks/info/${id}?token=a1e3c7abbd7d2dc25acb930880018c5f`,{headers: this.getHeaders()})
      .get(`${this.baseUrl}/tracks/info/${id}?token=e2594bee5609f774a4909f1f68cb5149`,{headers: this.getHeaders()})
      .map(maprecTracks); 
      return tracks$;      
  }


  getartistsnew(): Observable<Artist[]>{
    let artistsnew$ = this.http
      //.get(`${this.baseUrl}/artists/new?token=a1e3c7abbd7d2dc25acb930880018c5f`, {headers: this.getHeaders()})
      .get(`${this.baseUrl}/artists/new?token=e2594bee5609f774a4909f1f68cb5149`, {headers: this.getHeaders()})
      .map(mapnewArtist);
      //.catch(handleError);
      return artistsnew$; 

     /* var credentials = "token=a1e3c7abbd7d2dc25acb930880018c5f"
     let people$ =this.http.post(`${this.baseUrl}/tracks/new`, credentials, {headers: this.getHeaders()})
     .map(mapPersons);
     return people$; */
  }


  getplaylistsnew(): Observable<Playlist[]>{
    let playlistnew$ = this.http
      //.get(`${this.baseUrl}/playlists/new?token=dc09c9dd3be4edf3b3e06146b01dcd3d`, {headers: this.getHeaders()})
      //.get(`${this.baseUrl}/artists/new?token=a1e3c7abbd7d2dc25acb930880018c5f`, {headers: this.getHeaders()})
      .get(`http://m.odeo.fm/api/playlists/new?token=a1e3c7abbd7d2dc25acb930880018c5f`, {headers: this.getHeaders()})
      .map(mapnewPlaylist);
      //.catch(handleError);
      return playlistnew$; 

     /* var credentials = "token=a1e3c7abbd7d2dc25acb930880018c5f"
     let people$ =this.http.post(`${this.baseUrl}/tracks/new`, credentials, {headers: this.getHeaders()})
     .map(mapPersons);
     return people$; */
  }


  getPlaylistDetails(id:number):Observable<Playlist> {
     /*return this.http.get(`${this.baseUrl}/tracks/info/${id}`, {headers: this.getHeaders()})
     .map((res:Response) => res.json());  */           
      let playlist$ = this.http
      //.get(`${this.baseUrl}/tracks/info/${id}`,{headers: this.getHeaders()})
      //.get(`${this.baseUrl}/tracks/info/${id}?token=dc09c9dd3be4edf3b3e06146b01dcd3d`,{headers: this.getHeaders()})
      //.get(`${this.baseUrl}/tracks/info/${id}?token=a1e3c7abbd7d2dc25acb930880018c5f`,{headers: this.getHeaders()})
      .get(`http://m.odeo.fm/api/playlists/info/${id}?token=a1e3c7abbd7d2dc25acb930880018c5f`,{headers: this.getHeaders()})  
      .map(mapPlaylist); 
      return playlist$;      
  }

  getplayliststracks(id:number): Observable<Playlist[]>{
    let playlisttracks$ = this.http
      //.get(`${this.baseUrl}/playlists/new?token=dc09c9dd3be4edf3b3e06146b01dcd3d`, {headers: this.getHeaders()})
      //.get(`${this.baseUrl}/artists/new?token=a1e3c7abbd7d2dc25acb930880018c5f`, {headers: this.getHeaders()})
      .get(`http://m.odeo.fm/api/playlists/info/${id}?token=a1e3c7abbd7d2dc25acb930880018c5f`,{headers: this.getHeaders()})  
      .map(mapPlaylistTracks);
      //.catch(handleError);
      return playlisttracks$; 

     /* var credentials = "token=a1e3c7abbd7d2dc25acb930880018c5f"
     let people$ =this.http.post(`${this.baseUrl}/tracks/new`, credentials, {headers: this.getHeaders()})
     .map(mapPersons);
     return people$; */
  }

  


  getalbumsnew(): Observable<Album[]>{
    let albumssnew$ = this.http
      //.get(`${this.baseUrl}/albums/new?token=dc09c9dd3be4edf3b3e06146b01dcd3d`, {headers: this.getHeaders()})
      .get(`${this.baseUrl}/albums/new?token=a1e3c7abbd7d2dc25acb930880018c5f`, {headers: this.getHeaders()})
      .map(mapnewAlbum);
      return albumssnew$; 

  }

  getalbumdetails(id:number):Observable<Album> {

     /*return this.http.get(`${this.baseUrl}/tracks/info/${id}`, {headers: this.getHeaders()})
     .map((res:Response) => res.json());  */          
      
      let albums$ = this.http
      //.get(`${this.baseUrl}/tracks/info/${id}`,{headers: this.getHeaders()})
      //.get(`${this.baseUrl}/albums/info/${id}?token=dc09c9dd3be4edf3b3e06146b01dcd3d`,{headers: this.getHeaders()})
      .get(`${this.baseUrl}/tracks/info/${id}?token=a1e3c7abbd7d2dc25acb930880018c5f`,{headers: this.getHeaders()})
      .map(mapAlbum); 
      return albums$;  
      
  }

  save(person: Person) : Observable<Response>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    return this.http
    .put(`${this.baseUrl}/tracks/info/${person.track_id}`, JSON.stringify(person), {headers: this.getHeaders()});
  }


  fetchData(id:number){
    //return this.http.get(`${this.baseUrl}/albums/info/${id}?token=dc09c9dd3be4edf3b3e06146b01dcd3d`).map(
    return this.http.get(`${this.baseUrl}/albums/info/${id}?token=a1e3c7abbd7d2dc25acb930880018c5f`).map(
    (res) => res.json()
    );
  }

  private getHeaders(){
    let headers = new Headers();
    //headers.append('Accept', 'application/json');
    //headers.append('Content-Type', 'Authorization');
    //headers.append('Access-Control-Allow-Headers', '*');
   // headers.append('Authorization', 'dc09c9dd3be4edf3b3e06146b01dcd3d');
    // headers.append('Authorization', 'token');
    // headers.append('token', 'a1e3c7abbd7d2dc25acb930880018c5f');
    // headers.append('Authorization', 'Token token=a1e3c7abbd7d2dc25acb930880018c5f'  );
    // headers.append('Country-ID', 'a1e3c7abbd7d2dc25acb930880018c5f'  );
    //headers.append('Access-Control-Allow-Origin', '*');
    // headers.append("Access-Control-Allow-Headers", "origin, x-requested-with, content-type");
    // headers.append("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    // headers.append('Access-Control-Allow-Credentials', 'false');
    // headers.append('token', 'a1e3c7abbd7d2dc25acb930880018c5f');
    //headers.append('token', 'dc09c9dd3be4edf3b3e06146b01dcd3d');
    // headers.append('Country-Id', 'a1e3c7abbd7d2dc25acb930880018c5f');
    return headers;
  }
}

function mapPersons(response:Response): Person[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
  // OK return response.json().Tracks.map(toPerson)

   return response.json().map(toPerson)
}

function toPerson(r:any): Person{
  let person = <Person>({
   // id: extractId(r),
    status:r.track_id,
    track_id: r.track_id,
    artist_name: r.artist.firstname,
    thumb: r.upload_path,
    url: r.track_path,
    title: r.track_name,
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
    //return response.json().Track.recTracks.map(toTrack)
    return response.json().Track.info

    // return response.json().Track.info.map(toTrack)
    // return response.json()
}

function mapAlbum(response:Response): Album{
    // toPerson looks just like in the previous example
    //return response.json().Track.recTracks.map(toTrack)
    return response.json().albums.info

    // return response.json().Track.info.map(toTrack)
    // return response.json()
}

function mapPlaylist(response:Response): Playlist{
    // toPerson looks just like in the previous example
    //return response.json().Track.recTracks.map(toTrack)
    return response.json().Playlists.info

    // return response.json().Track.info.map(toTrack)
    // return response.json()
}


function maprecTracks(response:Response): Track{
    // toPerson looks just like in the previous example
    return response.json().Track.recTracks.map(toTrack)
    //return response.json().Track.info

    // return response.json().Track.info.map(toTrack)
    // return response.json()
}

function toTrack(r:any): Track{
  let person123 = <Track>({
   // id: extractId(r),
   status:r.status,
    track_id: r.track_id,
    artist_name: r.artist_name,
    thumb: r.thumb,
    url: r.url,
    title: r.title,
  });
  console.log('Parsed person:', person123);
  return person123;
}


function mapnewArtist(response:Response): Artist[]{
   return response.json().NewArtists
}

function toArtist(r:any): Artist{
  let artists = <Artist>({
    status:r.status,
    artist_id: r.artist,
    artist_name: r.artist_name,
    thumbs: r.thumbs,
    url: r.url,
    title: r.title,
  });
  console.log('Parsed Artist:', artists);
  return artists;
}


function mapnewPlaylist(response:Response): Playlist[]{
   return response.json().Playlists.map(toPlaylist)
}

function toPlaylist(r:any): Playlist{
  let playlist = <Playlist>({
    status:r.status,
    playlist_id: r.playlist_id,
    firstname: r.user.firstname,
    image_url: r.user.image_url,
    lastname: r.user.lastname,
    title: r.title,
    user:r.user,
  });
  console.log('Parsed Artist:', playlist);
  return playlist;
}

function mapPlaylistTracks(response:Response): Playlist[]{
   return response.json().Playlists.tracks.map(toPlaylistTrack)
}


function toPlaylistTrack(r:any): Track{
  let person123 = <Track>({
   // id: extractId(r),
   status:r.status,
    track_id: r.track_id,
    artist_name: r.artist.name,
    thumb: r.thumb,
    url: r.url,
    title: r.title,
  });
  console.log('Parsed person:', person123);
  return person123;
}


function mapnewAlbum(response:Response): Album[]{
   return response.json().albums.map(toAlbum)
}
function toAlbum(r:any): Album{
  let albumnew = <Album>({
    thumbs:r.thumbs,
    artist_id: r.artist_id,
    album_id:r.album_id,
    artist: r.artist,
    title: r.title,
  });
  console.log('Parsed Album:', albumnew);
  return albumnew;
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
