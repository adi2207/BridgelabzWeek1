import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }

  getCallWithToken(url,options){
    return this.http.get(url,options);

  }
  postCall(url,data){
    return this.http.post(url,data);

  }
  putCall(){

  }
  postCallWithToken(url,data,options){
    return this.http.post(url,data,options);
  }
  deleteCallWithToken(url,options){
    return this.http.delete(url,options);
  }
}
