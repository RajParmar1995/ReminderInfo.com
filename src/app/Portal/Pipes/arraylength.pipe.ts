import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraylength'
})
export class ArraylengthPipe implements PipeTransform {

  transform(value: any): any {
    if (value.length > 0) {
      let valuel = value.length;
     return valuel;
    }else{
      return 0;
    }   
  }

}
