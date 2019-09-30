import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  response:any;
  constructor(private http: HttpClient) { }

  login(user) {
    this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/login', user)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }
  register(user) {
    this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', user)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }
  forgot(user){
    this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/reset', user)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }
}


