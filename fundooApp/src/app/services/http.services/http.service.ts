import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }

  getCall(){

  }
  postCall(url,data){
    return this.http.post(url,data).subscribe((response) => {
      console.log(response);
    },(error)=>{
      console.log(error.statusText());
    });;
  }
  deleteCall(){

  }
  putCall(){

  }
}
