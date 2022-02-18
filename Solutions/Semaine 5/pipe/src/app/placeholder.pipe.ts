import { Pipe, PipeTransform } from '@angular/core';
import { LibraryService } from './library.service';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {

  constructor(public library: LibraryService) { }

  transform(value: any, args?: any): any {

    if(value === "" || value === null || value === undefined) {

      if(args != null && args != undefined && args === 'chat') {
        return this.library.CHAT;
      } else {
        return this.library.OISEAU;
      }

    }

    return value;
  }

}
