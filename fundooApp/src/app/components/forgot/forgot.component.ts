import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  email=new FormControl('',[Validators.required,Validators.email]);

  getEmailInvalidMessage(){
    if(this.email.hasError("required")){
      return "Email is required"
    }
    if(this.email.hasError("email")){
      return "Enter a valid email"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
