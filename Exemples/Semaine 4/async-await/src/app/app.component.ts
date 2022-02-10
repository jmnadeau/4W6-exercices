import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Artist } from './artist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'async-await';

  artist?: Artist;

  constructor(public httpService: HttpService) { }

  async loadArtist() {

    this.artist = await this.httpService.loadArtist('Glass Animals');

  }



}
