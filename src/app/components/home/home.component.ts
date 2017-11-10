import { Component, OnInit } from '@angular/core';
import { UserServise } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/User';
import { FormControl, FormGroup } from '@angular/forms/src/model';

export const users: User[] = [];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserServise]
})
export class HomeComponent implements OnInit {
  public users: User[] = [];
  public strSearch: string = '';
  public isDesc: boolean = false;
  public column: string = 'username';
  public mark: boolean;
  private direction: number;
  public response$;
  constructor(
    private userServise: UserServise,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.response$ = this.userServise.getUsers();
  }
  private isMarked(user) {
    this.mark = true;
  }
  private sort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
  private gotoDetail(user): void {
    this.router.navigate(['/user', user.id]);
  }
  
}
