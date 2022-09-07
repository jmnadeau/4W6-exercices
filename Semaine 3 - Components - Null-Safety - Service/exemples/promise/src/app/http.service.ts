import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, lastValueFrom } from 'rxjs';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  async loadArtist(artist: string):Promise<Artist> {
    let URL='http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=9a8a3facebbccaf363bb9fd68fa37abf&format=json&artist=' + artist;
    
    let res = await lastValueFrom(this.http.get<any>(URL));
    
    return Artist.parseArtist(res);
  }
}
