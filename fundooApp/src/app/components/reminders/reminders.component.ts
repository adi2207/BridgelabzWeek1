import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.services/notes.service'

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
  constructor(private notesService:NotesService ) { }

  ngOnInit() {
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

}
