import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit{


  getEmailInvalidMessage(email){
    if(email.hasError("required")){
      return "Email is required"
    }
    if(email.hasError("email")){
      return "Enter a valid email"
    }
  }
  getFirstNameInvalidMessage(firstname){
    if(firstname.hasError("required")){
      return "First Name is required"
    }
  }
  getLastNameInvalidMessage(lastname){
    if(lastname.hasError("required")){
      return "Last Name is required"
    }
  }
  getPasswordInvalidMessage(password){
    if(password.hasError("required")){
      return "Password is required";
    }
    if(password.hasError("minlength")){
      return "Minimum length of password must be 8";
    }
  }
  getConfirmPasswordInvalidMessage(confirmPassword){
    if(confirmPassword.hasError("required")){
      return "Password is required";
    }
    if(confirmPassword.hasError("minlength")){
      return "Minimum length of password must be 8";
    }
  }
  ngOnInit(){
    
  }
}

