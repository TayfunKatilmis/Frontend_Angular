import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterDropdown'
})
export class FilterDropdownPipe implements PipeTransform {

  transform(value: CarDetail, filter:any[]): string{
    if (filter.indexOf(value)!==-1) {
      let index=filter.indexOf(value)
      return filter[index]
      //en son burda kaldın marka adlarını uniqe olması gerekiyor
    }else{
      filter.push(value)
      let index=filter.indexOf(value)
      return filter[index]
    }
  }

}
