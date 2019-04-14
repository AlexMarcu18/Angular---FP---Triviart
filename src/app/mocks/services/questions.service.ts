import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuestionsMock } from '../models/questions.mock';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  public getAllQuestions():Array<Question>{
    return QuestionsMock.questions;
  }
}
