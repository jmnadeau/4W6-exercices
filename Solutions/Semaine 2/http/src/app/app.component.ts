import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  artist = "Mating Ritual";
  similarArtists: string[] = [];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    let URL='http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=9a8a3facebbccaf363bb9fd68fa37abf&format=json&artist=' + this.artist;
    this.http.get<any>(URL).subscribe(res => {

      console.log(res);

      // Array d'artistes similaires
      let lastFmSimilars = res.artist.similar.artist;

      for(let i=0; i<lastFmSimilars.length; i++) {
        // Chemin complet pour accéder à l'index 0
        // res.artist.similar.artist[0].name
        this.similarArtists.push(lastFmSimilars[i].name);
      }

      // On réinitialise l'array pour le 2e exemple avec un foreach
      this.similarArtists = [];

      // On pourrait aussi utiliser un foreach
      lastFmSimilars.forEach((similar: any) => {
        this.similarArtists.push(similar.name);
      });
    });
  }
}



