import { Component, OnInit } from '@angular/core';
import {NoteInterface} from '../../interfaces/note';
import {NotesService} from '../../services/notes.services/notes.service'
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  records:any;
  note:NoteInterface;
  updateMessage:string;
  constructor(private notesService:NotesService) { }
  isDeleted='true';
  ngOnInit() {
    this.getTrashNotes();
  }
  filterToGetTrash(records)
  {
    var newRecords = records.filter(function(note) {
      return (note.isDeleted==true);
    })
    console.log("note", newRecords);
    return newRecords;
  }
  getTrashNotes(){
    let options = {
      purpose: 'getTrashNotesList'
    }
    return this.notesService.getWithToken(options).subscribe((response: any) => {
      this.records=response.data.data.reverse();
      this.records=this.filterToGetTrash(this.records);
      console.log(response)
    }, (error) => {
      console.log(error);
    });
  }
 
  receiveUpdateMessage($event) {
    this.updateMessage = $event;
    this.getTrashNotes();
  }
}
