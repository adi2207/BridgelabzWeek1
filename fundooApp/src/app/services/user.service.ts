import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  response:any;
  error:any;
  constructor(private http: HttpClient) { }

  login(user) {
    this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/login', user)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }
}


