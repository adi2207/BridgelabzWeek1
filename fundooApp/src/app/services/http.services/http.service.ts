import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }

  getCallWithToken(url){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':localStorage.getItem('id')
      })
    } 
    return this.http.get(url,httpOptions);

  }
  postCall(url,data){
    return this.http.post(url,data);

  }
  putCall(){

  }
  postCallWithToken(url,data){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':localStorage.getItem('id')
      })
    }
    return this.http.post(url,data,httpOptions);
  }
  deleteCallWithToken(url){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':localStorage.getItem('id')
      })
    }
    return this.http.delete(url,httpOptions);
  }
  postImageWithToken(url,data){
    let httpOptions={
      headers:new HttpHeaders({
        'Authorization':localStorage.getItem('id')
      })
    }
    return this.http.post(url,data,httpOptions);
  }
  postCallWithTokenWithEncodedData(url,data){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('id')
      })
    }
    return this.http.post(url,data,httpOptions);
  }
  patchCallWithToken(url,data){
    let httpOptions={
      headers:new HttpHeaders({
        'Authorization':localStorage.getItem('id'),
        'Content-type':'application/json',

      })
    }
    return this.http.patch(url,data,httpOptions);
  }

}
