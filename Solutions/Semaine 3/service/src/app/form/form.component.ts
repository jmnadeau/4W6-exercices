import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  artistName = "";

  addArtist(): void {
    this.data.artists.push(new Artist(this.artistName));
    this.artistName = "";
  }

  constructor(public data: DataService) { }

  ngOnInit() {
  }

}
