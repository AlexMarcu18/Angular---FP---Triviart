import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';
import { Question } from 'src/app/models/Question';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public play: boolean = false;
  public gameOver: boolean = false;
  public questions: Array<Question>;
  public questionInterval: any;
  public index: number;
  public timer: number;
  public seconds: number;
  public minutes: number;
  public currentUser: User;
  public currentQuestion: Question;
  public currentAnswers: Array<string>;
  public answerSubmitted: boolean = false;
  public score: number = 0;
  public questionSolved: number = 0;


  @Input() category: string;
  @Input() questionNumber: number;
  @Input() timePerQuestion: number;

  constructor(private gameService: GameService,
    private userService: UserService) {
  }

  ngOnInit() {
    const questionsObservable = this.gameService.getQuestions();
    questionsObservable.subscribe((questionsData: Array<Question>) => {
      this.questions = questionsData;
    })
    this.currentUser = JSON.parse(this.userService.getLoggedUser());
    this.currentUser = JSON.parse(window.localStorage.getItem(this.currentUser.email));
  }

  startGame() {
    this.play = true;
    this.gameOver = false;
    this.setupGame();
    this.questionInterval = setInterval(() => {
      // console.log(this.minutes);
      // console.log(this.seconds);
      if (this.seconds == 0 && this.minutes == 0) {
        this.gameOver = true;
        this.play = false;
        this.updateLocalUserStats();
        this.userService.updateUserStats(this.currentUser);
        this.currentQuestion = null;
        clearInterval(this.questionInterval);
      }
      else if (this.seconds % this.timePerQuestion == 0) {
        this.answerSubmitted = false;
        this.currentQuestion = this.questions[this.index - 1];
        this.currentAnswers = this.shuffle(this.gameService.addAnswersId(this.currentQuestion.correctAnswers.concat(this.currentQuestion.wrongAnswers)));
        this.index--;
        if (this.seconds == 0 && this.minutes > 0) {
          this.minutes--;
          this.seconds = 60;
        }
        // console.log(this.seconds)
      }
      if (this.seconds) {
        this.seconds--;
        console.log(this.seconds);
      }
    }, 1000);
  }

  setupGame() {
    if (this.questionNumber) {
      this.index = this.questionNumber;
    }
    else {
      this.index = this.questions.length;
    }
    if (this.timePerQuestion) {
      this.timer = this.timePerQuestion * this.index + 4;
    }
    else {
      this.timer = 5 * this.index + 4;
    }
    this.seconds = this.timer % 60;
    this.minutes = Math.floor(this.timer / 60);
    console.log(this.minutes)
    this.questions = this.shuffle(this.questions);
    this.questionSolved = 0;
  }

  submitAnswer(answer: any) {
    if (!this.answerSubmitted) {
      this.answerSubmitted = true;
      if (answer.id == 1) {
        this.score += (this.seconds % this.timePerQuestion) * 100 + 100;
        this.questionSolved += 1;
      }
    }
  }

  updateLocalUserStats() {
    this.gameService.addScoreToLeaderboard(this.score);
    if (this.score > this.currentUser.bestScore) {
      this.currentUser.bestScore = this.score;
    }
    this.currentUser.gamesPlayed += 1;
    this.currentUser.questionsSolved += this.questionSolved;
  }

  shuffle(input: Array<any>) {
    for (let i = input.length - 1; i >= 0; i--) {

      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = input[randomIndex];

      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  }
}
