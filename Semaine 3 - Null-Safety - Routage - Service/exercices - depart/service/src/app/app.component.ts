import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laboratoire';
  artistName = "";

  artists: Artist[] = [
    new Artist("The Black Keys"),
    new Artist("MorMor"),
    new Artist("Parcels"),
    new Artist("Glass Animals"),
    new Artist("Mating Ritual"),
  ];

  addArtist(): void {
    this.artists.push(new Artist(this.artistName));
    this.artistName = "";
  }
}

export class Artist {
  constructor(
    public name: string
  ) { }
}
