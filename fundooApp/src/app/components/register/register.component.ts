import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.services/user.service';
import { DataService } from '../../services/data.services/data.service';
import { Router } from '@angular/router';

import { RegisterInterface } from '../../interfaces/register';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: RegisterInterface;

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.password.value)]);
  response:any;
  typeOfService:any;

  constructor(private userService: UserService,private dataService:DataService,private router:Router) { }
  ngOnInit() {
    this.dataService.currentMessage.subscribe((typeOfService)=>{
      this.typeOfService = typeOfService;
    });

  }
  getEmailInvalidMessage() {
    if (this.email.hasError("required")) {
      return "Email is required"
    }
    if (this.email.hasError("email")) {
      return "Enter a valid email"
    }
  }
  getFirstNameInvalidMessage() {
    if (this.firstName.hasError("required")) {
      return "First Name is required"
    }
  }
  getLastNameInvalidMessage() {
    if (this.lastName.hasError("required")) {
      return "Last Name is required"
    }
  }
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
      return "Passwords mismatch";
    }

  }

  onSignUp() {
    this.user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      service: this.typeOfService,
      email: this.email.value,
      password: this.password.value
    }
    this.userService.register(this.user).subscribe((response)=>{
      console.log(response);
      this.dataService.changeMessage("User registered successfully");
      //this.router.navigate(["/login"]);
    },(error)=>{
      console.log(error);
      this.dataService.changeMessage("User could not be registered");
    });
   
  }
}
