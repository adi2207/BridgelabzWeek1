import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpService} from '../http.services/http.service'

@Injectable({
  providedIn: 'root'
})
export class QuestionanswerService {
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
  askQuestion(data){
    return this.http.postCallWithToken(this.baseUrl+'questionAndAnswerNotes/addQuestionAndAnswer',data);
  }
  postReply(data){
    return this.http.postCallWithToken(this.baseUrl+'questionAndAnswerNotes/reply/'+data.id,data);
  }
  likeDislike(parentId,data){
    return this.http.postCallWithToken(this.baseUrl+'questionAndAnswerNotes/like/'+parentId,data);

  }

}
