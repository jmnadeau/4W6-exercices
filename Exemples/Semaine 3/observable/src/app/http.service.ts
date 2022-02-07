import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  loadArtist(artist: string):Observable<Artist> {
    let URL='http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=9a8a3facebbccaf363bb9fd68fa37abf&format=json&artist=' + artist;
    return this.http.get<any>(URL)
      .pipe(
        map(res => {
          return Artist.parseArtist(res);
        })
      );
  }
}
