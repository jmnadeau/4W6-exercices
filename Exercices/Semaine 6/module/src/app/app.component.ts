import { Component } from '@angular/core';
import { Artist, ARTISTS } from './artist';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    artists = ARTISTS;
    selectedArtist: Artist;

    onSelect(artist: Artist): void {
        this.selectedArtist = artist;
    }
}
