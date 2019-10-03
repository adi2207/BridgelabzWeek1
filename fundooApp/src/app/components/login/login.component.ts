import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/login'
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.services/user.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);

    response: any;
    private user: UserInterface;
    constructor(private userService: UserService) { }

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
            service: "basic"
        }
        let options = {
            data: this.user,
            purpose: 'login'
        }
        let result = this.userService.postWithoutToken(options)
        result.subscribe((response) => {
            this.response = response;
            console.log(this.response);
        });
    }
}