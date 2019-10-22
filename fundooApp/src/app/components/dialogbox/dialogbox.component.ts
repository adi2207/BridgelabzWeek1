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
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private dialogRef: MatDialogRef<DisplaycardsComponent>,
    @Inject(MAT_DIALOG_DATA) data,private notesService:NotesService, private dataService:DataService) {
    this.color=data.color
      this.note={
      description: data.description,
      title:data.title,
      noteId:data.recordid,
      color:data.color

    }

  }
  
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }
  save() {
    if(this.data.value!=null)
      this.note.description=this.data.value;
    if(this.title.value!=null)
      this.note.title = this.title.value;
    this.note={
      'noteId':this.note.noteId,
      'title':this.note.title,
      'description':this.note.description,
      'color':this.note.color
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
    console.log("here",$event);
    this.color=$event;
    this.dataService.changeMessage(this.updateMessage);
  }
}


