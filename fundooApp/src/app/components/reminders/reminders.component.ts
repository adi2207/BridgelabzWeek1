import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service'
import {DataService} from '../../services/data.services/data.service'

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  records=[];
  isDeleted='false'
  updateMessage:any;
  message:any;
  isArchived='false';
  constructor(private notesService: NotesService,private dataService:DataService) {
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
    this.getReminders()
  }
  // filterTrashAndArchives(records)
  // {
  //   var newRecords = records.filter(function(note) {
  //     return (note.isDeleted==false && note.isArchived==false);
  //   })
  //   return newRecords;
  // }
  getReminders() {
    this.notesService.getReminders().subscribe((response:any) => {
      this.records = response.data.data.reverse();
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
  receiveUpdateMessage($event) {
    this.updateMessage=$event;
    this.getReminders()
  }

}
