import { Component, OnInit ,Inject,Output, EventEmitter,Input} from '@angular/core';
import {NoteInterface} from '../../interfaces/note';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DisplaycardsComponent} from '../displaycards/displaycards.component'
import { FormControl } from '@angular/forms';
import {NotesService} from '../../services/notes.services/notes.service'
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {

  note:any;
  title=new FormControl();
  data=new FormControl();
  options:any;
  noteUpdateMessage:string="note updated";

  @Output() noteMessageEvent = new EventEmitter<string>();

  constructor(private dialogRef: MatDialogRef<DisplaycardsComponent>,
    @Inject(MAT_DIALOG_DATA) data,private notesService:NotesService) {
    this.note={
      description: data.description,
      title:data.title,
      noteId:data.recordid,
      color:data.color
    }

  }
  
  ngOnInit() {
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
    }
    this.dialogRef.close(this.note);
    this.options={
      data:this.note,
      purpose:'updateNotes'
    }
    this.notesService.postWithToken(this.options).subscribe((response)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
    });

  }  
}


