import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mark'
})
export class MarkPipe implements PipeTransform {
  transform(users, value) {
    return users.filter(user=> user.mark == value);
  }
}