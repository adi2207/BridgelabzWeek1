import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/login'
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);
    
    private user: UserInterface;
    constructor(private userService: UserService, private router:Router, private authService:AuthService) { }

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
    getPasswordInvalidMessage() {
        if (this.password.hasError("required")) {
            return ("Password is required");
        }
    }

    onLogin() {
        
        this.user = {
            email: this.email.value,
            password: this.password.value,
            service: "advance"
        }
        this.userService.login(this.user).subscribe((response:any)=>{
            console.log(response);
            this.authService.sendToken(response.userId);
            localStorage.setItem("firstName",response.firstName);
            localStorage.setItem("lastName",response.lastName);
            localStorage.setItem("email",response.email);
            localStorage.setItem("id",response.id);
            localStorage.setItem("profile-pic",response.imageUrl);
            this.router.navigate(["/"]);
          },(error)=>{
            console.log(error);
          });
        
    }
}
