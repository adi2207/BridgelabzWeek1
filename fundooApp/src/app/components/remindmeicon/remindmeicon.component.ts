import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import {NotesService} from '../../services/notes.services/notes.service'
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-remindmeicon',
  templateUrl: './remindmeicon.component.html',
  styleUrls: ['./remindmeicon.component.scss']
})
export class RemindmeiconComponent implements OnInit {

  updateMessage:any;
  @Input() recordid : any;
  @Output() messageEvent = new EventEmitter<string>();
  date:Date;
  constructor(private notesService:NotesService) { }

  ngOnInit() {
  }

  setReminder(picker){

    console.log("dfddddddddddddddd",picker);
    this.date=picker._validSelected
    let data={
      'noteIdList':[this.recordid],
      'reminder':this.date
    }
    this.notesService.addReminder(data).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.updateMessage);
    }, (error) => {
      console.log(error);
    });

  }
  
}
