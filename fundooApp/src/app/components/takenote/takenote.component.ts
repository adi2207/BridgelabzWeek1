import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl,Validators} from '@angular/forms';
import {NotesService} from '../../services/notes.services/notes.service'
import {NoteInterface} from '../../interfaces/note'
import { DataService } from 'src/app/services/data.services/data.service';
@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  
  data=new FormControl();
  title=new FormControl();
  message:string;
  note:NoteInterface;
  options:any;
  constructor(private notesService: NotesService,private dataService:DataService) { }
  show: boolean = true;

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }
  toggle() { 
    this.show= !this.show;
  }
  onClose() {
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
        this.dataService.changeMessage("new noteeeee");
      },(error)=>{
        console.log(error);
      });
    }  

}
