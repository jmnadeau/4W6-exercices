import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    return value.toUpperCase();
  }

}
