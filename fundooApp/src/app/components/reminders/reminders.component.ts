import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.services/notes.service'
import { DataService } from '../../services/data.services/data.service'

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  records:any;
  noteType='reminders'
  takeNoteType='reminders'
  updateMessage:any;
  message:any;
  constructor(private notesService:NotesService,private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
    this.getReminders();
  }
  getReminders(){
    return this.notesService.getReminders().subscribe((response: any) => {
      console.log(response);
      this.records=response.data.data.reverse();
    }, (error) => {
      console.log(error);
    });
  }
  receiveColorUpdateMessage($event) {
    this.dataService.changeMessage($event);

    this.getReminders();
  }
  receiveReminderUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getReminders();
  }
  receiveCollaboratorUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getReminders();
  }
  receiveChecklistCreationMessage($event) {
    this.dataService.changeMessage($event);
    this.getReminders();
  }
  receiveLabelUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getReminders();
  }
  receiveUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getReminders();
  }

}
