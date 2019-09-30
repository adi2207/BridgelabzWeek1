import { Component, OnInit } from '@angular/core';
//import {ErrorComponent} from '../error/error.component';
import {FormControl,Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {RegisterModel} from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:RegisterModel=new RegisterModel();

  firstName=new FormControl('',[Validators.required]);
  lastName=new FormControl('',[Validators.required]);
  email=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(6)]);
  confirmPassword=new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern(this.password.value)]);

  getEmailInvalidMessage(){
    if(this.email.hasError("required")){
      return "Email is required"
    }
    if(this.email.hasError("email")){
      return "Enter a valid email"
    }
  }
  getFirstNameInvalidMessage(){
    if(this.firstName.hasError("required")){
      return "First Name is required"
    }
  }
  getLastNameInvalidMessage(){
    if(this.lastName.hasError("required")){
      return "Last Name is required"
    }
  }
  getPasswordInvalidMessage(){
    if(this.password.hasError("required")){
      return "Password is required";
    }
    if(this.password.hasError("minlength")){
      return "Minimum length of password must be 6";
    }
    
  }
  getConfirmPasswordInvalidMessage(){
    if(this.confirmPassword.hasError("required")){
      return "Password is required";
    }
    if(this.confirmPassword.hasError("minlength")){
      return "Minimum length of password must be 6";
    }
    if(this.confirmPassword.hasError("pattern")){
      return "Passwords mismatch";
    }
    
  }
  //constructor(private error : ErrorComponent) { }
  // errorEmailCall(){
  //   this.error.getEmailInvalidMessage(this.email);
  // }
  constructor(private userService:UserService) { }
  ngOnInit() {
  }

  onSignUp(){
    this.user={
      firstName:this.firstName.value,
      lastName:this.lastName.value,
      service: "basic",
      email:this.email.value,
      password:this.password.value
  }
  console.log("--------------------",this.user);
  this.userService.register(this.user);
}
}
