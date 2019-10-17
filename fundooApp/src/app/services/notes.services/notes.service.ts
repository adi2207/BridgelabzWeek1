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
  
  getEncodedData(data){
    const formBody=[];
    for(const property in data){
      const encodedKey=encodeURIComponent(property);
      const encodedValue=encodeURIComponent(data[property]);
      formBody.push(encodedKey+'='+encodedValue);
    }
    return formBody.join ('&');
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
    return this.http.getCallWithToken(this.baseUrl+'notes/getArchiveNotesList');

  }
  // addLabelToNotes(data){
  //   return this.http.postCallWithToken(this.baseUrl+'notes/addNotes',this.getEncodedData(data))
  // }
  createArchiveNote(data){
    return this.http.postCallWithToken(this.baseUrl+'notes/archiveNotes',data)

  }
  createTrashNotes(data){
      return this.http.postCallWithToken(this.baseUrl+'notes/trashNotes',data)

  }
  changeColor(data){
    return this.http.postCallWithToken(this.baseUrl+'notes/changeColorNotes',data)

}
updateNote(data){
  return this.http.postCallWithToken(this.baseUrl+'notes/updateNotes',this.getEncodedData(data))

}
deleteNoteForever(data){
  return this.http.postCallWithToken(this.baseUrl+'notes/deleteForeverNotes',data)

}
}





