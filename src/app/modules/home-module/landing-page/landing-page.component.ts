import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../../authentication-module/login/login.component';
import { BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public modalRef: BsModalRef;
  constructor(private router: Router) { }

  @ViewChild(LoginComponent) loginModal: LoginComponent;
  @ViewChild(LeaderboardComponent) leaderboardModal: LeaderboardComponent;

  public config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'login-popup'
  };
  ngOnInit() {
  }


  openLoginModal() {
    if (window.sessionStorage.getItem('currentUser') || window.localStorage.getItem('currentUser')) {
      this.router.navigate(['/game-page']);
    }
    else {
      this.loginModal.openModal();
    }
  }
  openLeaderboardModal() {
    this.leaderboardModal.openModal();
  }

}
