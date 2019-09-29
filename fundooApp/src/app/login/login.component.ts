import { Component, OnInit } from '@angular/core';
import {LoginModel} from './login.model'
import {FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: LoginModel =new LoginModel();
  loginForm :FormGroup;
  constructor(private formBuilder:FormBuilder ){ }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      'email':this.user.email,
      'password':this.user.password
    })
    console.log(this.loginForm);
  }

}
