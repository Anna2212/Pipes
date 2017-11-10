import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { users } from '../components/home/home.component';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'
@Injectable()
export class UserServise {

  constructor(private http: Http) { }

  public getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(response => response.json());
  }

  public getUser(id: number): Observable<User> {
    return this.getUsers()
      .map(users => users.find(
        user => user.id === id,
      ));
  }
}