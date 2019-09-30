import { Component, OnInit } from '@angular/core';
import {LoginModel} from './login.model'
import {FormControl,Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required]);
  user: LoginModel =new LoginModel();

  getEmailInvalidMessage(){
    if(this.email.hasError("required")){
      return("Email is required");
    }
    if(this.email.hasError("email")){
      return("Invalid Email")
    }
  }
  getPasswordInvalidMessage(){
    if(this.password.hasError("required")){
      return("Password is required");
    }
  }
  
  constructor(private userService:UserService ){ }

  ngOnInit() {
  }
  onLogin(){
    this.user={
      'email':this.email.value,
      'password':this.email.value,
    }
    this.userService.login(this.user);
  }


}
