import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/Question';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public questions: Array<Question>;
  public questionsStorage: Array<Question>;
  public rules: Array<string> = [
    'Set your game preferences before you start it',
    'You have a couple of seconds for every question',
    'The shorter the time you answer, the highest the score',
    'Only one answer is correct',
    'Be the best',
    'Have fun!'
  ]
  constructor() {
  }

  getQuestions(): any {
    this.questions = JSON.parse(window.localStorage.getItem('questions'));
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

  addAnswersId(answers: Array<string>): Array<any>{
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
}
