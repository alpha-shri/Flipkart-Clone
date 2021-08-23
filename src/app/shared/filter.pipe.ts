import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], filterString: string, propertyName: string): any[] {

    const result:any = [];

    if(!value || filterString==="" || propertyName === ""){
      return value;
    }

    value.forEach( ( element:any ) =>{
          if(element[propertyName]
                  .trim().toLowerCase()
                  .includes(filterString.toLowerCase)
            ){

              result.push( element );
            }



    });


    return result;
  }

}
