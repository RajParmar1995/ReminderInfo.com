import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menufilter'
})
export class MenufilterPipe implements PipeTransform {

  transform(value: any): any {
    if (value == "Super Admin" || value == "Manager") {
      return 
    }
  }

}
