import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './Application/login.service';
import { LogUserType } from './Domain/logUser.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  logUser!: LogUserType;

  constructor(
    private fb: FormBuilder,
    private logIn: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: ['@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  async submit() {
    this.logUser = this.loginForm.value;
    try {
      await this.logIn.log(this.logUser);
    } catch (error: any) {      
    }
  }
}
