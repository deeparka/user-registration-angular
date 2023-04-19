import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
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

      this._userService.addUser(data.value);

      this.form.reset();
    } else {
      console.log('Not valid');
    }
  }
}
