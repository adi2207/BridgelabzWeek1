import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service';

@Component({
  selector: 'app-displaycards',
  templateUrl: './displaycards.component.html',
  styleUrls: ['./displaycards.component.scss']
})
export class DisplaycardsComponent implements OnInit {
  records:any;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    let options={
      purpose:'getNotesList'
    }
    return this.notesService.getWithToken(options).subscribe((response:any)=>{
      this.records=response.data.data.reverse();
      console.log(response);
    },(error)=>{
      console.log(error);
    });

  }



}
