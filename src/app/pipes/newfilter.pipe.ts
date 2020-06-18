import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newfilter'
})
export class NewfilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.name.toLocaleLowerCase().includes(args.toLocaleString().toLocaleLowerCase()) 
      || (val.city.toLocaleLowerCase().includes(args.toLocaleString().toLocaleLowerCase())));
      return rVal;
    })
  }
}
