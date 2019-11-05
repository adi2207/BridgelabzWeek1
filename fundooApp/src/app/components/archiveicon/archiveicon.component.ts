import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service'
import {DataService} from '../../services/data.services/data.service'

@Component({
  selector: 'app-archiveicon',
  templateUrl: './archiveicon.component.html',
  styleUrls: ['./archiveicon.component.scss']
})
export class ArchiveiconComponent implements OnInit {

  note: any;
  records:any;
  labels:any;
  updateMessage:string="note updated"
  @Input() noteType:any;
  @Input() recordid : any;

  
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private notesService:NotesService, private dataService:DataService) { }
  ngOnInit(){
  }
  
  archiveNote(){
      let noteObj={
        'noteIdList':[this.recordid],
        'isArchived':true
      }
      return this.notesService.createArchiveNote(noteObj).subscribe((response: any) => {
        console.log(response);
        this.messageEvent.emit("Note Archived")

      }, (error) => {
        console.log(error);
        this.messageEvent.emit("Note could not be archived")

      });
  }
  unarchiveNote(){
      let noteObj={
        'noteIdList':[this.recordid],
        'isArchived':false
      }
      return this.notesService.createArchiveNote(noteObj).subscribe((response: any) => {
        console.log(response);
        this.messageEvent.emit("Note unarchived")
      }, (error) => {
        console.log(error);
        this.messageEvent.emit("Note could not be unarchived")

      });
    }

}
