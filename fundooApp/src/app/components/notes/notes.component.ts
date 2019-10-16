import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  records=[];
  updateMessage:any;
  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.getCards()
  }
  filterTrashAndArchives(records)
  {
    var newRecords = records.filter(function(note) {
      return (note.isDeleted==false && note.isArchived==false);
    })
    return newRecords;
  }
  getCards() {
    let options = {
      purpose: 'getNotesList'
    }
    this.notesService.getWithToken(options).subscribe((response:any) => {
      this.records = response.data.data.reverse();
      this.records=this.filterTrashAndArchives(this.records)      
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
  receiveUpdateMessage($event) {
    this.updateMessage=$event;
    this.getCards()
  }


}
