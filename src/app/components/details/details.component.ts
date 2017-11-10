import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserServise } from '../../services/users.service';
import { Location } from '@angular/common';
import { users } from '../home/home.component';
import { User } from '../../models/User';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: '',
    geo: '',
    phone: '',
    website: '',
    company: ''
  }

  
  private response;
  constructor(
    private userServise: UserServise,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userServise.getUser(+params.get('id')))
      .subscribe(user => this.user = user);
  }
  private goBack(): void {
    this.location.back();
  }
}
