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
    return this.http.postCallWithToken(this.baseUrl+'notes/addNotes',data)

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
  addLabelToNotes(data){
    return this.http.postCallWithToken(this.baseUrl+'notes/'+data.noteId+'/addLabelToNotes/'+data.labelId+'/add',data)
  }
  createArchiveNote(data){
    return this.http.postCallWithToken(this.baseUrl+'notes/archiveNotes',data)

  }
  createTrashNotes(data){
      return this.http.postCallWithToken(this.baseUrl+'notes/trashNotes',data)

  }
  changeColor(data){
    return this.http.postCallWithToken(this.baseUrl+'notes/changesColorNotes',data)

}
updateNote(data){
  return this.http.postCallWithToken(this.baseUrl+'notes/updateNotes',data)

}
deleteNoteForever(data){
  return this.http.postCallWithToken(this.baseUrl+'notes/deleteForeverNotes',data)

}

getNotesByLabelName(data){
  return this.http.postCallWithToken(this.baseUrl+'notes/getNotesListByLabel/'+data.labelName,data);
}
getReminders(){
  return this.http.getCallWithToken(this.baseUrl+'notes/getReminderNotesList');

}
addReminder(data){
  return this.http.postCallWithToken(this.baseUrl+'notes/addUpdateReminderNotes',data);
}
deleteLabelFromNote(data){
  return this.http.postCallWithToken(this.baseUrl+'notes/'+data.noteId+'/addLabelToNotes/'+data.labelId+'/remove',data)

}
deleteReminderFromNote(data){
  return this.http.postCallWithToken(this.baseUrl+'notes/removeReminderNotes',data)

}
addCollaboratorsToNote(data){
  return this.http.postCallWithToken(this.baseUrl+'notes/'+data.id+'/AddcollaboratorsNotes',data)
}
patchNoteDetails(data){
  return this.http.patchCallWithToken(this.baseUrl+'notes/'+data.id,data)

}
getNoteDetails(data){
  return this.http.getCallWithToken(this.baseUrl+'notes/getNotesDetail/'+data.id)
}
deleteCollaboratorFromNote(data){
  return this.http.deleteCallWithToken(this.baseUrl + 'notes/' + data.id + '/removeCollaboratorsNotes/'+data.userId)
}

}





