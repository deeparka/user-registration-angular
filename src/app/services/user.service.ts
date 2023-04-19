import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  constructor() {
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
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
