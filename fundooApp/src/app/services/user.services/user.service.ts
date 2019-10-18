import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpService} from '../http.services/http.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl=environment.baseUrl;
  constructor(private http:HttpService) { }
  
  getEncodedData(data){
    const formBody=[];
    for(const property in data){
      const encodedKey=encodeURIComponent(property);
      const encodedValue=encodeURIComponent(data[property]);
      formBody.push(encodedKey+'='+encodedValue);
    }
    return formBody.join ('&');
  }
  forgotPassword(data){
    return this.http.postCall(this.baseUrl+'user/reset',data);

  }
  login(data){
    return this.http.postCall(this.baseUrl+'user/login',data);

  }
  register(data){
    return this.http.postCall(this.baseUrl+'user/userSignUp',this.getEncodedData(data));
  }
  resetPassword(data){
    return this.http.postCallWithToken(this.baseUrl+'user/reset-password',data);
  }
  uploadPicture(data){
    return this.http.postImageWithToken(this.baseUrl+'user/uploadProfileImage',data);
  }
}


