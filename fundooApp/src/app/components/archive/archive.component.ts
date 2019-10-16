import { Component, OnInit } from '@angular/core';
import {NoteInterface} from '../../interfaces/note';
import {NotesService} from '../../services/notes.services/notes.service'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  records:any;
  updateMessage:any;
  isDeleted='false';
  constructor(private notesService : NotesService) { }

  ngOnInit() {
    this.getArchivedNotes()
  }
  filterToGetArchived(records)
  {
    var newRecords = records.filter(function(note) {
      return (note.isDeleted==false&&note.isArchived==true);
    })
    return newRecords;
  }
  getArchivedNotes(){
    let options = {
      purpose: 'getArchiveNotesList'
    }
    return this.notesService.getWithToken(options).subscribe((response: any) => {
      console.log(response);
      this.records=response.data.data.reverse();
      this.records=this.filterToGetArchived(this.records);
    }, (error) => {
      console.log(error);
    });

  }
  receiveUpdateMessage($event) {
    this.updateMessage = $event;
    this.getArchivedNotes();
  }

}
