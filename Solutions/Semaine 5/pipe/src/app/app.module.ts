import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ArtistComponent} from './artist/artist.component';
import {FormsModule} from '@angular/forms';
import {LibraryService} from './library.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { PlaceholderPipe } from './placeholder.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    PlaceholderPipe
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
