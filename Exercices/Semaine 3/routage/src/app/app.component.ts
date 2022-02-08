import { Component } from '@angular/core';
import { ARTISTS, Artist } from './artist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  artists = ARTISTS;
  selectedArtist?: Artist;

  onSelect(artist: Artist): void {
      this.selectedArtist = artist;
  }
}
