import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = new Subject<User>();
  public user$ = this.user.asObservable();
  public registeredUser: User;
  public loggedUser: User;
  public registeredUsers: User[] = [
    {
      firstname: 'Alex',
      lastname: 'Marcu',
      email: 'alex.marcu@gmail.com',
      password: '12345678',
      isAdmin: false,
      bestScore: 1200,
      questionsSolved: 50,
      gamesPlayed: 10,
      level: 1
    },
  ];
  public sessionStorage = window.sessionStorage;
  public localStorage = window.localStorage;


  constructor() {
  }

  getLoggedUser() {
    if (this.localStorage.getItem('currentUser')) {
      return this.localStorage.getItem('currentUser');
    }
    else {
      return this.sessionStorage.getItem('currentUser');
    }
  }

  public updateProfileUser(user: User) {
    this.user.next(user);
  }
  public getProfileObserver(){
    return this.user$;
  }

  updateUserStats(user: User) {
    this.loggedUser = JSON.parse(this.localStorage.getItem(user.email));

    this.loggedUser.bestScore = user.bestScore;
    this.loggedUser.gamesPlayed = user.gamesPlayed;
    this.loggedUser.questionsSolved = user.questionsSolved;
    this.localStorage.setItem(user.email, JSON.stringify(this.loggedUser));
    this.updateProfileUser(this.loggedUser);
  }

  logoutUser() {
    if (this.localStorage.getItem('currentUser')) {
      this.localStorage.removeItem('currentUser');
    }
    else {
      this.sessionStorage.removeItem('currentUser');
    }
  }

  checkCredentials(email: string, password: string) {
    if( this.localStorage.getItem(email) !== null){
      this.loggedUser = JSON.parse(this.localStorage.getItem(email));
      if (this.loggedUser.email == email && this.loggedUser.password == password) {
        return this.loggedUser;
      }
    }
    else {
      return null;
    }
  }

  loginSubmit(email: string, pass: string, rememberMe: boolean) {

    this.loggedUser = this.checkCredentials(email, pass);
    if (this.loggedUser) {
      if (rememberMe) {
        this.localStorage.setItem('currentUser', JSON.stringify(this.loggedUser));
      }
      else {
        this.sessionStorage.setItem('currentUser', JSON.stringify(this.loggedUser));
      }
      return true;
    }
    return false;
  }

  registerSubmit(firstname: string, lastname: string, email: string, pass: string) {
    this.registeredUser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: pass,
      isAdmin: false,
      bestScore: 0,
      questionsSolved: 0,
      gamesPlayed: 0,
      level: 1
    };
    this.localStorage.setItem(email, JSON.stringify(this.registeredUser));
  }
}
