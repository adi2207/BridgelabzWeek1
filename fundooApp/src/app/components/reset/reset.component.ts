import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.services/user.service';
import { ResetInterface } from '../../interfaces/reset'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.password.value)]);
  resetObj: ResetInterface;
  response: any;

  getPasswordInvalidMessage() {
    if (this.password.hasError("required")) {
      return "Password is required";
    }
    if (this.password.hasError("minlength")) {
      return "Minimum length of password must be 6";
    }
  }
  getConfirmPasswordInvalidMessage() {
    if (this.confirmPassword.hasError("required")) {
      return "Password is required";
    }
    if (this.confirmPassword.hasError("minlength")) {
      return "Minimum length of password must be 6";
    }
    if (this.confirmPassword.hasError("pattern")) {
      return "Passwords donot match";
    }
  }
  constructor(private userService: UserService, private routing:Router,
    private route:ActivatedRoute) { }

  token:string;
  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
    localStorage.setItem('token',this.token);
  }
  onReset() {
    this.resetObj = {
      newPassword: this.password.value,
    }
    let options = {
      data: this.resetObj,
      purpose: 'reset-password'
    }

    //console.log(options.purpose);
    return this.userService.postWithToken(options).subscribe((response)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
    });
  }
}
