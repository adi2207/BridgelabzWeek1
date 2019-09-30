import { Component, OnInit } from '@angular/core';
//import {ErrorComponent} from '../error/error.component';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstname=new FormControl('',[Validators.required]);
  lastname=new FormControl('',[Validators.required]);
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
    if(this.firstname.hasError("required")){
      return "First Name is required"
    }
  }
  getLastNameInvalidMessage(){
    if(this.lastname.hasError("required")){
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
  constructor() { }
  ngOnInit() {
  }
}
