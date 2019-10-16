import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpService} from '../http.services/http.service'
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl=environment.baseUrl;
  constructor(private http:HttpService) { }
  
  postWithoutToken(options){
    return this.http.postCall(this.baseUrl+'notes/'+options.purpose,options.data)
  }
  postWithToken(options){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('id')
      })
    }    
    return this.http.postCallWithToken(this.baseUrl+'notes/'+options.purpose,this.getEncodedData(options.data),httpOptions)
  }
  postWithTokenCreateUrl(options){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('id')
      })
    }    
    return this.http.postCallWithToken(this.baseUrl+'notes/'+options.data.noteId+"/"+options.purpose+"/"+options.data.labelId+"/add",this.getEncodedData(options.data),httpOptions)
  }
  getWithToken(options){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('id')
      })
    }  
    return this.http.getCallWithToken(this.baseUrl+'notes/'+options.purpose,httpOptions)

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
  postWithTokenNoEncoding(options){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':localStorage.getItem('id')
      })
    }    
    return this.http.postCallWithToken(this.baseUrl+'notes/'+options.purpose,options.data,httpOptions)
  }
  addNote(data){
    return this.http.postCallWithToken(this.baseUrl+'notes/addNotes',this.getEncodedData(data))

  }
  getTrash(){
    return this.http.getCallWithToken(this.baseUrl+'notes/getTrashNotesList')

  }
  getNotes(){
    return this.http.getCallWithToken(this.baseUrl+'notes/getNotesList')

  }
  getArchives(){
    return this.http.getCallWithToken(this.baseUrl+'notes/archiveNotes');

  }
  addLabelToNotes(data){
    return this.http.postCallWithToken(this.baseUrl+'notes/addNotes',this.getEncodedData(data))
  }
  createArchiveNote(data){
    return this.http.postCallWithToken(this.baseUrl+'notes/addNotes',data)

  }
}





