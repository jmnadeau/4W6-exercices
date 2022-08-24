import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Album} from './album';
import {LibraryService} from '../library.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  constructor(private library: LibraryService) { }

  artist_name: string = 'Winston Surfshirt';
  albums: Album[] = [];

  ngOnInit(): void {
    this.library.getAlbums().subscribe((albums: Album[]) => this.albums = albums);
  }
}
