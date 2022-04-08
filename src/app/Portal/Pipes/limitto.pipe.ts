import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitto'
})
export class LimittoPipe implements PipeTransform {

 /* transform(value: any, ...args: any[]): any {
    return null;
  }*/

  transform(value: any, args?: any): any {
    if (args === undefined) {
      return value;
    }
  if(value){
    if (value.length > args) {
      return value.substring(0, args) + '....';
    } else {
      return value;
    }
  }else{
    return '';
  }
}

  

}
