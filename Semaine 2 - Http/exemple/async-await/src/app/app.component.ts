import { lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from './artist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'async-await';

  // Le ? à la fin de la propriété artist veut dire que la variable peut être undefined
  artist?: Artist;
  // On peut également mettre un | (ou) dans le type pour permettre le null ou le undefined
  // artist?: Artist est la même chose que artist: Artist | undefined

  constructor(public http: HttpClient) { }

  async loadArtist(): Promise<void> {

    let artistName = 'Kate Bush';

    // Ne pas oublier de changer API_KEY pour une clé d'API valide
    let URL='http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=API_KEY&format=json&artist=';

    let result = await lastValueFrom(this.http.get<any>(URL + artistName));

    this.artist = Artist.parseArtist(result);

  }

}
