import { Pipe, PipeTransform } from '@angular/core';
import { CommonService } from '../Service/common.service'

@Pipe({
  name: 'instype'
})
export class InstypePipe implements PipeTransform {
constructor(public common: CommonService) { }
  transform(value: any): any {
    debugger
    if (value > 0) {
      return this.common.InsuranceType.filter(x => x.id == value)[0].insType
    }
    else {
      return value;
    }
  }
}