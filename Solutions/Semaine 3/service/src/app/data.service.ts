import { Injectable } from '@angular/core';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  artists: Artist[] = [
    new Artist("The Black Keys"),
    new Artist("MorMor"),
    new Artist("Parcels"),
    new Artist("Glass Animals"),
    new Artist("Mating Ritual"),
  ];

  constructor() { }

}
