import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it._id.includes(searchText) || it._id.toLowerCase().includes(searchText) || it.package.type.includes(searchText) || it.package.type.toLowerCase().includes(searchText);
    });
   }
}