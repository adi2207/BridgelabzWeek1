import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import {NotesService} from '../../services/notes.services/notes.service'
import { toDate } from '@angular/common/src/i18n/format_date';
import { DataService } from 'src/app/services/data.services/data.service';

@Component({
  selector: 'app-remindmeicon',
  templateUrl: './remindmeicon.component.html',
  styleUrls: ['./remindmeicon.component.scss']
})
export class RemindmeiconComponent implements OnInit {

  updateMessage:any;
  @Input() recordid : any;
  @Output() reminderEvent = new EventEmitter<string>();
  date:Date;
  constructor(private notesService:NotesService,private dataService:DataService) { }

  ngOnInit() {
  }

  setReminder(picker){
    this.date=picker._validSelected

    if(this.recordid==undefined){
      this.dataService.updateTakeNoteReminder(this.date);
    }
    else{
    let data={
      'noteIdList':[this.recordid],
      'reminder':this.date
    }
    this.notesService.addReminder(data).subscribe((response: any) => {
      console.log(response);
      this.reminderEvent.emit("Reminder set");
      this.dataService.updateDialogBoxReminder(this.date);

    }, (error) => {
      console.log(error);
      this.reminderEvent.emit("Reminder could not be set");

    });

  }
    }
  
}
