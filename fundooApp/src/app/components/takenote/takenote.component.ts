import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl,Validators} from '@angular/forms';
import {NotesService} from '../../services/notes.services/notes.service'
import {NoteInterface} from '../../interfaces/note'
@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  
  message:string;
  data=new FormControl();
  title=new FormControl();
  note:NoteInterface;
  options:any;
  constructor(private notesService: NotesService) { }
  show: boolean = true;

  ngOnInit() {

  }
  toggle() { 
    this.show= !this.show;
  }
  receiveMessage($event) {
    this.message = $event
    this.show= !this.show;
      this.note={
        title:this.title.value,
        description:this.data.value
      }
      console.log(this.note);
      this.options={
        data:this.note,
        purpose:'addNotes'
      }
      this.notesService.postWithToken(this.options).subscribe((response)=>{
        console.log(response);
      },(error)=>{
        console.log(error);
      });
    }  

}
