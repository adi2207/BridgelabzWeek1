import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.services/user.service';
import { ResetInterface } from '../../interfaces/reset'

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
  //tokenReceived:'izDCxh0nyCd8UPms9LT7HVUx6sy1Y5FKsNiFIhmPylWIxCQCA0fdeH2Fsxqa86xA';

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
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onReset() {
    this.resetObj = {
      newPassword: this.password.value,
      service: "basic",
    }
    let options = {
      data: this.resetObj,
      purpose: 'reset-password/izDCxh0nyCd8UPms9LT7HVUx6sy1Y5FKsNiFIhmPylWIxCQCA0fdeH2Fsxqa86xA'

    }
    console.log(options.purpose);
    let result = this.userService.postWithoutToken(options)
    return result.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    },(error)=>{
      console.log(error.statusText());
    });
  }
}
