import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public records:any;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    //this.displayCards()
  }
  filterTrashAndArchives(records)
  {
    var newRecords = records.filter(function(note) {
      return (note.isDeleted==false && note.isArchived==false);
    })
    return newRecords;
  }
  displayCards() {
    let options = {
      purpose: 'getNotesList'
    }
    return this.notesService.getWithToken(options).subscribe((response: any) => {
      this.records = response.data.data.reverse();
      this.records=this.filterTrashAndArchives(this.records)
      console.log("hajhsjhjshk", this.records);
      
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

}
