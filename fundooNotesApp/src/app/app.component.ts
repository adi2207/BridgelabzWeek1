import { Component } from '@angular/core';
import { User } from './login/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  user : User;
  inputText:string="default val";

  constructor(){
    this.user=new User();
    this.user.email='aditipal96@gmail.com';
    this.user.password='whatever';
  }
}
