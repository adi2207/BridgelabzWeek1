import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import { ForgotInterface} from '../../interfaces/forgot';
import { UserService } from '../../services/user.services/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  email=new FormControl('',[Validators.required,Validators.email]);
  user:ForgotInterface;
  
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  getEmailInvalidMessage() {
    if (this.email.hasError("required")) {
        return ("Email is required");
    }
    if (this.email.hasError("email")) {
        return ("Invalid Email")
    }
}
  onForgot(){
    this.user={
      email:this.email.value,
      service:"basic"
    }
    let options = {
      data: this.user,
      purpose: 'reset'
    }
    let result =this.userService.postWithoutToken(options)
    return result.subscribe((response) => {
      console.log(response);
    },(error)=>{
      console.log(error.statusText());
    });
  }

}
