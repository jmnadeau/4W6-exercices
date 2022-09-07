import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Artist } from './artist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'observable';
  artist?: Artist;

  constructor(public httpService: HttpService) {}

  async ngOnInit(): Promise<void> {
    this.artist = await this.httpService.loadArtist('Glass Animals');
  }
}
