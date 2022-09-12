import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { BioComponent } from './bio/bio.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/artists', pathMatch: 'full' },
      { path: 'artists', component: ArtistComponent },
      { path: 'bio/:artist', component: BioComponent },
      { path: '**', component: ArtistComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
