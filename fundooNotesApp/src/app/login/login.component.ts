import { Component, OnInit, Input } from '@angular/core';
import { User } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input('user') userObj:User;
  constructor() { 

  }

  ngOnInit() {
    
       this.user={
        email: this.userObj.email;
        password: this.userObj.password;
       };
  }
    

}
