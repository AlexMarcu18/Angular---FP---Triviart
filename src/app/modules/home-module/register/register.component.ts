import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private userService:UserService) {
    this.form = this.formBuilder.group({
      firstname: ['',[Validators.minLength(4), Validators.required]],
      lastname: ['',[Validators.minLength(4), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]]
    });
   }


  ngOnInit() {
  }

  registerUser(){
    this.userService.registerSubmit(this.form.get('firstname').value,this.form.get('lastname').value,this.form.get('email').value,this.form.get('password').value);
  }

}
