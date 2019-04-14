import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
import { User } from 'src/app/models/User';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public userSerivice: UserService) { }

  public isAuthenticated(): boolean {
    const user = this.userSerivice.getLoggedUser();
    if (user) {
      return true;
    }
    else {
      return false;
    }
  }

  public getAuthenticatedUser(): User {
    return JSON.parse(this.userSerivice.getLoggedUser());
  }
}