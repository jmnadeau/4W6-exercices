import { Component } from '@angular/core';
import { Artist, ARTISTS } from '../artist';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html'
})
export class ArtistComponent {

    artists = ARTISTS;
    selectedArtist?: Artist;

    onSelect(artist: Artist): void {
        this.selectedArtist = artist;
    }
}
