import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ForgotModel } from './forgot.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  email=new FormControl('',[Validators.required,Validators.email]);
  user:ForgotModel=new ForgotModel();
  getEmailInvalidMessage(){
    if(this.email.hasError("required")){
      return "Email is required"
    }
    if(this.email.hasError("email")){
      return "Enter a valid email"
    }
  }
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  onForgot(){
    this.user={
      email:this.email.value,
      service:"basic"
    }
    this.userService.forgot(this.user);
  }

}
