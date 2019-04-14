import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game/game.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private gameService: GameService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      description: ['', [Validators.minLength(10),Validators.required]],
      correctAnswer: ['', [Validators.minLength(4),Validators.required]],
      wrongAnswer1: ['', [Validators.minLength(4),Validators.required]],
      wrongAnswer2: ['', [Validators.minLength(4),Validators.required]],
      wrongAnswer3: ['', [Validators.minLength(4),Validators.required]],
    })
  }

  ngOnInit() {
  }

  addQuestion() {
    if (this.form.valid) {
      this.gameService.addQuestion(this.form);
      this.snackBar.open("Question added", null, {
        duration: 3000,
        panelClass: 'snackbar'
      });
    }
    else {
      this.snackBar.open("Invalid inputs", null, {
        duration: 3000,
        panelClass: 'snackbar'
      });
    }

  }
}
