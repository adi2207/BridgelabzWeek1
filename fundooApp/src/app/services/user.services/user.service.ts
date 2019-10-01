import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpService} from '../http.services/http.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  response:any;
  baseUrl=environment.baseUrl;
  constructor(private http:HttpService) { }
  
  postWithoutToken(options){
    return this.http.postCall(this.baseUrl+options.purpose,options.data);
  }
}


