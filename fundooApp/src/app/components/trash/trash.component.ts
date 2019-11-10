import { Component, OnInit } from '@angular/core';
import {NoteInterface} from '../../interfaces/note';
import {NotesService} from '../../services/notes.services/notes.service'
import {DataService} from '../../services/data.services/data.service'
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  records:any;
  note:NoteInterface;
  updateMessage:string;
  message:string;
  noteType='deleted';

  constructor(private notesService:NotesService,private dataService:DataService) { }
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
    this.getTrashNotes();
  }
  getTrashNotes(){
    return this.notesService.getTrash().subscribe((response: any) => {
      this.records=response.data.data.reverse();
      console.log(response)
    }, (error) => {
      console.log(error);
    });
  }

  receiveUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getTrashNotes();
  }

 
}
