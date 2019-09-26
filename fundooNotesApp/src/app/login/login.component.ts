import { Component, OnInit, Input } from '@angular/core';
import { User } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input('user') userObj:User;
  user:any;
  response: any;
   constructor() { 

  }

  ngOnInit() {  
      //  this.user={
      //   email: this.userObj.email,
      //   password: this.userObj.password
      //  };


  }
  submitForm(){
    // this.http.post('ngfjnfm').subscribe((response)=>{
    //     this.userObj.email= response.email,
    //     this.userObj.password=response.password
    //     this.response=response;
    //   console.log(this.response);
    // })
  }  

}
