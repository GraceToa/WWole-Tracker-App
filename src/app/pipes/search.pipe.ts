import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: any[], text: string, row: string): any[] {
    if (text === ''){
      return array;
    }
    text = text.toLowerCase();
    return array.filter(item =>{
      return item[row].toLowerCase().includes(text);
    });

  }
}
