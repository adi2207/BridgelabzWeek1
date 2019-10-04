import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.services/data.service';
import {NotesService} from '../../services/notes.services/notes.service';

@Component({
  selector: 'app-displaycards',
  templateUrl: './displaycards.component.html',
  styleUrls: ['./displaycards.component.scss']
})
export class DisplaycardsComponent implements OnInit {
  response:any;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    
  }

  onDisplayCards(){
    let options={
      purpose:'getNotesList'
    }
    return this.notesService.getWithoutToken(options).subscribe((response:any)=>{
      this.response=response;
      console.log(response);
    },(error)=>{
      console.log(error);
    });
  }



}
