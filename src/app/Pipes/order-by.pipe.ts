import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  transform(users: Array<any>, args?: any): any {
    return users.sort(function (a, b) {
      if (a[args.property] < b[args.property]) {
        return -1 * args.direction;
      }
      if (a[args.property] > b[args.property]) {
        return 1 * args.direction;
      }
      
        return 0;
     
    });
  };
}