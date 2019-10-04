import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpService} from '../http.services/http.service'


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl=environment.baseUrl;
  constructor(private http:HttpService) { }
  
  postWithoutToken(options){
    return this.http.postCall(this.baseUrl+'note/'+options.purpose,options.data).subscribe((response) => {
      console.log(response);
    },(error)=>{
      console.log(error.statusText());
    });
  }
}





