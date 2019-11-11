import { Component, OnInit } from '@angular/core';
import {NoteInterface} from '../../interfaces/note';
import {NotesService} from '../../services/notes.services/notes.service'
import {DataService} from '../../services/data.services/data.service'
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  records:any;
  updateMessage:any;
  message:any;
  noteType='archived';
  
  constructor(private notesService : NotesService,private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe((message)=>{
      this.message=message;
      this.getArchivedNotes()
    })
  }
  filterToGetArchived(records)
  {
    var newRecords = records.filter(function(note) {
      return (note.isDeleted==false);
    })
    return newRecords;
  }
  getArchivedNotes(){

    return this.notesService.getArchives().subscribe((response: any) => {
      console.log(response);
      this.records=response.data.data.reverse();
      this.records=this.filterToGetArchived(this.records);
    }, (error) => {
      console.log(error);

    });

  }
  receiveUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getArchivedNotes();

  }
  receiveColorUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getArchivedNotes();

  }
  receiveReminderUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getArchivedNotes();

  }
  receiveCollaboratorUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getArchivedNotes();

  }
  receiveChecklistCreationMessage($event) {
    this.dataService.changeMessage($event);
    this.getArchivedNotes();

  }
  receiveLabelUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getArchivedNotes();

  }

}
