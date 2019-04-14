import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { GameService } from 'src/app/services/game/game.service';
import { MatHorizontalStepper } from '@angular/material';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public form: FormGroup;
  public user: string = '';
  public rules: Array<string>;
  public isLinear = false;
  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

  constructor(private userService: UserService,
    private gameService: GameService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.user = JSON.parse(this.userService.getLoggedUser())
    this.form = this.formBuilder.group({
      category: ['', [Validators.required]],
      questions: ['', [Validators.required]],
      time: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.rules = this.gameService.getRules();
    this.stepper._getIndicatorType = () => 'number';
  }


  logoutUser() {
    this.userService.logoutUser();
    this.user = '';
    this.router.navigate(['landing-page']);
  }


}
