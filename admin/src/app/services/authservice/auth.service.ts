import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  sendToken(userId: string) {
    localStorage.setItem("userId", userId)
  }
  getToken() {
    return localStorage.getItem("userId")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("userId");
    this.router.navigate(["login"]);
  }

}
