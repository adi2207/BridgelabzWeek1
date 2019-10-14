import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  sendToken(id: string) {
    localStorage.setItem("id", id)
  }
  getToken() {
    return localStorage.getItem("id")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("id");
    this.router.navigate(["login"]);
  }

}
