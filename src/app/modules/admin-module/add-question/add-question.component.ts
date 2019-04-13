import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  public form:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private gameService:GameService) {
    this.form = this.formBuilder.group({
      description:['',[Validators.required]],
      correctAnswer:['',[Validators.required]],
      wrongAnswer1:['',[Validators.required]],
      wrongAnswer2:['',[Validators.required]],
      wrongAnswer3:['',[Validators.required]],
    })
   }

  ngOnInit() {
  }

  addQuestion() {
    this.gameService.addQuestion(this.form);
  }
}
