import { Injectable } from '@angular/core';
import { RulesMock } from '../models/rules.mock';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  public getRules():Array<string>{
    return RulesMock.rules;
  }
}