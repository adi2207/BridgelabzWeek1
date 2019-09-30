import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  password=new FormControl('',[Validators.required,Validators.minLength(6)]);
  confirmPassword=new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern(this.password.value)]);
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
      return "Passwords donot match";
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
