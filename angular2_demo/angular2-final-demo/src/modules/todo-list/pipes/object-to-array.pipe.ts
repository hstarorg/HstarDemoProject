import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray',
  pure: false
})

export class ObjectToArrayPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    if (!value) {
      return [];
    }
    if (typeof value !== 'object') {
      return value;
    }
    return Object.keys(value).map(key => ({ key, value: value[key] }));
  }
}