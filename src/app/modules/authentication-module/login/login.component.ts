import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup
  public modalRef: BsModalRef;

  public email: AbstractControl;
  public password: AbstractControl;
  public rememberMe: boolean;
  public loginResponse: boolean;
  public submitPressed: boolean;

  constructor(private modalService: BsModalService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]]
    });
  }

  @ViewChild('template') template: ElementRef;

  public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'login-popup'
  };

  ngOnInit() {
    this.submitPressed = false;
  }

  openModal(): void {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  closeModal(): void {
    this.modalRef.hide();
    this.submitPressed = false;
  }

  onSubmit() {
    this.email = this.form.get("email");
    this.password = this.form.get("password");
    if (this.email.valid && this.password.valid) {
      this.loginResponse = this.userService.loginSubmit(this.form.get("email").value, this.form.get("password").value, this.rememberMe);
      this.submitPressed = true;
      if (this.loginResponse) {
        this.modalRef.hide();
        this.router.navigate(['/game-page']);
      }
    }
  }

}
