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
  constructor(private notesService:NotesService) { }

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
      console.log(response);
      this.records=response.data.data.reverse();
      this.records=this.filterToGetTrash(this.records);
    }, (error) => {
      console.log(error);
    });

  }
  deleteNoteForever(recordid){
    let noteObj={
      'noteIdList':[recordid],
      'isDeleted':true
    }
    let options = {
      data:noteObj,
      purpose: 'deleteForeverNotes'
    }
    return this.notesService.postWithTokenNoEncoding(options).subscribe((response: any) => {
      console.log(response);
      this.getTrashNotes();
    }, (error) => {
      console.log(error);
    });
  }

}
