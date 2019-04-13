import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})

export class RoleGuardService implements CanActivate {
  public authenticatedUser:User;
  constructor(public auth: AuthService,
    public router: Router) {}
  canActivate(): boolean {

    if (!this.auth.isAuthenticated()) {
      alert('You re not logged in!')
      this.router.navigate(['landing-page']);
      return false;
    }
    else if(this.auth.getAuthenticatedUser().isAdmin != true) {
      alert('You re not an admin!');
      this.router.navigate(['game-page']);
      return false;
    }
    return true;
  }
}