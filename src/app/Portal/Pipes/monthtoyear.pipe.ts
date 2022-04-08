import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthtoyear'
})
export class MonthtoyearPipe implements PipeTransform {

  transform(value: any): any {
    if (value > 0) {
      var x = value , months = x % 12, years = (x - months) / 12;
      if(value<12){
        return months + ' Months'
      }else{
        if(years > 0 && months > 0 ){
          return years + ' Year,  ' + months + ' Months'
        }else{
          return years + ' Year'
        }
      }
    }else{
      return value;
    }   
  }

}
