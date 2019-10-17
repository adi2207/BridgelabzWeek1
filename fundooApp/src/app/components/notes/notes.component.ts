import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service'
import {DataService} from '../../services/data.services/data.service'

@Component({
  selector: 'app-notes',  
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  records=[];
  isDeleted='false'
  updateMessage:any;
  message:any;
  isArchived='false';
  constructor(private notesService: NotesService,private dataService:DataService) {
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
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
    this.notesService.getNotes().subscribe((response:any) => {
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
