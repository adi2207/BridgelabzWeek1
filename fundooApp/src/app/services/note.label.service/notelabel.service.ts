import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpService} from '../http.services/http.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotelabelService {

  baseUrl=environment.baseUrl;

  constructor(private http:HttpService) { }
  
  postWithoutToken(options){
    return this.http.postCall(this.baseUrl+'noteLabels/'+options.purpose,options.data)
  }
  postWithToken(options){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('id')
      })
    }    
    return this.http.postCallWithToken(this.baseUrl+'noteLabels/'+options.purpose,this.getEncodedData(options.data),httpOptions)
  }
  postWithTokenCreateUrl(options){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('id')
      })
    }    
    return this.http.postCallWithToken(this.baseUrl+'noteLabels/'+options.data.id+"/"+options.purpose,this.getEncodedData(options.data),httpOptions)
  }
  deleteWithToken(options){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('id')
      })
    }
    return this.http.deleteCallWithToken(this.baseUrl+'noteLabels/'+options.data.id+options.purpose,httpOptions)  
  }
  getWithToken(options){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('id')
      })
    }  
    return this.http.getCallWithToken(this.baseUrl+'noteLabels/'+options.purpose,httpOptions)

  }
  getEncodedData(data){
    const formBody=[];
    for(const property in data){
      const encodedKey=encodeURIComponent(property);
      const encodedValue=encodeURIComponent(data[property]);
      formBody.push(encodedKey+'='+encodedValue);
    }
    return formBody.join ('&');
  }
createLabel(data){    
  return this.http.postCallWithToken(this.baseUrl+'noteLabels/',data)
}
getLabels(){
  return this.http.getCallWithToken(this.baseUrl+'noteLabels/getNoteLabelList')

}
deleteLabel(data){

  return this.http.deleteCallWithToken(this.baseUrl+'noteLabels/'+data.id+'/deleteNoteLabel')

}
renameLabel(data){
  return this.http.deleteCallWithToken(this.baseUrl+'noteLabels/'+data.id+'/updateNoteLabel')

}
}









