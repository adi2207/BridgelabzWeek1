import { Component, OnInit ,Inject,Output, EventEmitter,Input} from '@angular/core';
import {NoteInterface} from '../../interfaces/note';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DisplaycardsComponent} from '../displaycards/displaycards.component'
import { FormControl } from '@angular/forms';
import {NotesService} from '../../services/notes.services/notes.service'
import { DataService } from 'src/app/services/data.services/data.service';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {
  color:any;
  note:any;
  title=new FormControl();
  data=new FormControl();
  options:any;
  updateMessage:string="note updated";
  message:any;
  isArchived:any;
  isDeleted:any;
  reminder:any;
  collaborators:any;
  noteType:any;
  description:any;
  noteId:any;
  titlee:any;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private dialogRef: MatDialogRef<DisplaycardsComponent>,
    @Inject(MAT_DIALOG_DATA) data,private notesService:NotesService, private dataService:DataService) {
      this.description= data.description,
      this.titlee=data.title,
      this.noteId=data.recordid,
      this.color=data.color,
      this.reminder=data.reminder,
      this.collaborators=data.collaborators,
      this.noteType=data.noteType
      console.log("reminders in cons",this.reminder)
  }
  
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);

  }
  save() {
    if(this.data.value!=null)
      this.description=this.data.value;
    if(this.title.value!=null)
      this.titlee = this.title.value;
    this.note={
      'noteId':this.noteId,
      'title':this.titlee,
      'description':this.description,
      'color':this.color
    }
    this.dialogRef.close(this.note);

    this.notesService.updateNote(this.note).subscribe((response)=>{
      console.log(response);
      this.dataService.changeMessage(this.updateMessage);
    },(error)=>{
      console.log(error);
    });

  }  
  receiveUpdateMessage($event) {
    this.dataService.changeMessage(this.updateMessage);
  }
  receiveColorUpdateMessage($event){
    this.dataService.dialogBoxColorUpdate.subscribe(message => this.color = message);
  }
  receiveCollaboratorUpdateMessage($event){
    console.log("in dialog box receive update message ",$event)
    this.dataService.dialogBoxCollaboratorUpdate.subscribe(message => this.collaborators.push(message));
    console.log("collabsssssss ",this.collaborators)

  }
  receiveReminderUpdateMessage($event){
    this.dataService.dialogBoxReminderUpdate.subscribe(message => {this.reminder = message})
  }

}


