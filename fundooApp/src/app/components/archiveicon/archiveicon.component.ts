import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service'
import {NotelabelService} from '../../services/note.label.service/notelabel.service'
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

  @Input() recordid : any;

  
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private notesService:NotesService,private notelabelService:NotelabelService) { }
  ngOnInit(){
  }
  
  archiveNote(){
    if(this.recordid!=null){
      let noteObj={
        'noteIdList':[this.recordid],
        'isArchived':true
      }
      return this.notesService.createArchiveNote(noteObj).subscribe((response: any) => {
        console.log(response);
        this.messageEvent.emit(this.updateMessage)
      }, (error) => {
        console.log(error);
      });
    }
    else{

    }
  }
  

}
