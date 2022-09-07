import { Component, Input, OnInit } from '@angular/core';
import { Artist, ARTISTS } from '../artist';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'artist-bio',
    templateUrl: './bio.component.html'
})
export class BioComponent implements OnInit {

  artistName?: string;
  artist?: Artist;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.artistName = this.route.snapshot.paramMap.get('artist')!;

    for (const a of ARTISTS) {
      if(a.name == this.artistName){
        this.artist = a;
      }
    }

  }

}
