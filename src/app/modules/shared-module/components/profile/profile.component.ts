import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Observable, Subject } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user:User;
  public bestScore: number;
  public questionsSolved: number;
  public gamesPlayed: number;
  public level: number;
  constructor(private userService: UserService) {
    this.user = JSON.parse(this.userService.getLoggedUser());
    console.log(this.user);
    this.user = JSON.parse(window.localStorage.getItem(this.user.email));
    console.log(this.user);
  }

  ngOnInit() {
    this.bestScore = this.user.bestScore;
    this.questionsSolved = this.user.questionsSolved;
    this.gamesPlayed = this.user.gamesPlayed;
    this.level = this.user.level;
  }

  public subscription = this.userService.getProfileObserver().subscribe( data => {
    this.bestScore = data.bestScore;
    this.questionsSolved = data.questionsSolved;
    this.gamesPlayed = data.gamesPlayed;
    this.level = data.level;
  })


}
