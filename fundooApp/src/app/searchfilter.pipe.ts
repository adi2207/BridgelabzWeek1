import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(records: any[], searchText: string): any[] {
    if (!records) return [];
    if (!searchText) return records;
    return records.filter(response => {
      return response.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}



