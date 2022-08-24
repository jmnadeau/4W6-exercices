import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from './artist';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  async loadArtist(artistName : string): Promise<Artist> {
    let URL='http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=API_KEY&format=json&artist=';

    let result = await lastValueFrom(this.http.get<any>(URL + artistName));
    let artistSequentiel = Artist.parseArtist(result);

    // ou

    let artistPipe = await lastValueFrom(
      this.http.get<any>(URL).pipe(
        map(res => {
          return Artist.parseArtist(res);
        })
      )
    );

    return artistPipe; // ou return artistSequentiel;
  }

}
