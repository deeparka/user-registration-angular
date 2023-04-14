import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    isActive: false,
    registered: undefined,
    hide: false,
  };
  users: User[] = [];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Arkadeep',
        lastName: 'Prasad',
        email: 'arkadeep180@gmail.com',
        isActive: false,
        registered: new Date('02/01/2023 08:00:00'),
        hide: true,
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/30/2023 11:15:00'),
        hide: true,
      },
      {
        firstName: 'Sam',
        lastName: 'Davids',
        email: 'sam@gmail.com',
        isActive: true,
        registered: new Date('02/20/2022 11:40:14'),
        hide: true,
      },
    ];

    this.loaded = true;
  }

  toogleHide(user: User) {
    user.hide = !user.hide;
  }

  handleSubmit(data: NgForm) {
    if (data.valid) {
      // console.log(data);
      data.value.isActive = true;
      data.value.registered = new Date();
      data.value.hide = false;

      this.users.unshift(data.value);

      this.form.reset();
    } else {
      console.log('Not valid');
    }
  }
}
