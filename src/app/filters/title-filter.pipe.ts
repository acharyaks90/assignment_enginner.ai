import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {
  /**
     * @ngdoc method
     * @name titleFilter
     * @methodOf TitleFilterPipe
     * @description
     * Open the Modal
     * @param values the list
     * @param title argument
     */
  transform(values: any, title: string): any {
    if (!values || !title) {
      return values;
  }
   return values.filter(item => item.title.indexOf(title) !== -1);

  }

}
