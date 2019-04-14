import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/Question';
import { FormGroup } from '@angular/forms';
import { Score } from 'src/app/models/Score';
import { UserService } from '../user/user.service';
import { User } from 'src/app/models/User';
import { QuestionsMock } from 'src/app/mocks/models/questions.mock';
import { RulesMock } from 'src/app/mocks/models/rules.mock';
import { QuestionsService } from 'src/app/mocks/services/questions.service';
import { RulesService } from 'src/app/mocks/services/rules.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public questions: Array<Question>;
  public questionsStorage: Array<Question>;
  public questionsMock: QuestionsMock;
  public rulesMock: RulesMock;
  public rules: Array<string>;
  public leaderboard: Array<Score>;
  public currentUser: User;

  constructor(
    private userService: UserService,
    private mockQuestionsService: QuestionsService,
    private mockRulesService: RulesService
  ) {
    this.rules = this.mockRulesService.getRules();
  }


  getQuestions(): any {
    this.questions = JSON.parse(window.localStorage.getItem('questions'));
    if (!this.questions) {
      this.questions = this.mockQuestionsService.getAllQuestions();
      window.localStorage.setItem('questions',JSON.stringify(this.questions));
    }
    const questionsObservable = new Observable(obs => {
      obs.next(this.questions);
    });
    return questionsObservable;
  }

  getRules() {
    return this.rules;
  }

  addQuestion(form: FormGroup) {
    this.questionsStorage = JSON.parse(window.localStorage.getItem('questions'));
    const description = form.get('description').value;
    const correctAnswer = form.get('correctAnswer').value;
    const wrongAnswer1 = form.get('wrongAnswer1').value;
    const wrongAnswer2 = form.get('wrongAnswer2').value;
    const wrongAnswer3 = form.get('wrongAnswer3').value;

    this.questionsStorage.push({
      description: description,
      correctAnswers: [correctAnswer],
      wrongAnswers: [wrongAnswer1, wrongAnswer2, wrongAnswer3]
    });
    window.localStorage.setItem('questions', JSON.stringify(this.questionsStorage));
  }

  addAnswersId(answers: Array<string>): Array<any> {
    return [{
      id: 1,
      data: answers[0]
    },
    {
      id: 2,
      data: answers[1]
    },
    {
      id: 3,
      data: answers[2]
    },
    {
      id: 4,
      data: answers[3]
    }];
  }

  addScoreToLeaderboard(score: number) {
    this.currentUser = JSON.parse(this.userService.getLoggedUser());
    if (window.localStorage.getItem('leaderboard') == null) {
      this.leaderboard = [{
        firstname: this.currentUser.firstname,
        lastname: this.currentUser.lastname,
        data: score
      }];
    }
    else {
      this.leaderboard = JSON.parse(window.localStorage.getItem('leaderboard'));
      this.leaderboard.push({
        firstname: this.currentUser.firstname,
        lastname: this.currentUser.lastname,
        data: score
      });
      this.leaderboard = this.leaderboard.sort((a, b) => (a.data > b.data) ? 1 : -1).reverse();
      if (this.leaderboard.length > 10) {
        this.leaderboard = this.leaderboard.slice(0, 10);
      }
    }
    window.localStorage.setItem('leaderboard', JSON.stringify(this.leaderboard));
  }
}
