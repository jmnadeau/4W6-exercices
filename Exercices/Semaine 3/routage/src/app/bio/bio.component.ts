import { Component, Input } from '@angular/core';
import { Artist } from "../artist";

@Component({
    selector: 'artist-bio',
    templateUrl: './bio.component.html'
})
export class BioComponent {
    @Input() artist?: Artist;
}
