import {Injectable, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';
import {Album} from './artist/album';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  public OISEAU = 'https://i.kym-cdn.com/entries/icons/original/000/021/941/up_load_this.png';
  public CHAT = 'https://thumbs.gfycat.com/ThickGlitteringHound-small.gif';

  private ALBUMS: Album[] = [{name: 'Apple Crumble', image: 'https://i.scdn.co/image/ab67616d0000b2739a3d89d0792cc41410eccf7f'},
    {name: 'Sponge Cake', image: 'https://i.scdn.co/image/ab67616d0000b273b9d1417b6270506a5f262e28'},
    {name: 'Every Day Is A Holiday', image: 'https://i.scdn.co/image/ab67616d0000b273df1edde2aef9c6d47b3bda65'},
    {name: 'Sponge Cake Rebaked', image: undefined},
    {name: 'Smile', image: undefined},
    {name: 'The Antidote', image: 'https://i.scdn.co/image/ab67616d0000b27319842db9fce84f370835265c'},
    {name: 'Make A Move', image: 'https://i.scdn.co/image/ab67616d0000b273875f407432b3a625a39d2107'},
    {name: 'Every Day Is A Holiday [Remix]', image: 'https://i.scdn.co/image/ab67616d0000b27345e1769c237b2ffe8cf53884'}];


  public getAlbums(): Observable<Album[]> {
    return of(this.ALBUMS);
  }

}
