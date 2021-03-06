import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clothesFilter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], criteria: string): any {
   if ( criteria === 'all') {
     return items;
   } else {
     return items.filter(item => {
      //  return item.acf.category === criteria;
      return item.category === criteria;
     });
   }
  }

}
