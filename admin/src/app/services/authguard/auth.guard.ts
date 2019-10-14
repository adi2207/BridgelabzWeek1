import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { Observable } from 'rxjs/Observable';
import { AuthService } from '../authservice/auth.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
    private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(this.auth.isLoggednIn()){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
}