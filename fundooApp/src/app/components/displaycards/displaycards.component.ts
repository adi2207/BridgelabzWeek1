import { Component, OnInit, Inject,Input } from '@angular/core';
import { NotesService } from '../../services/notes.services/notes.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NoteInterface } from '../../interfaces/note';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { DataService } from 'src/app/services/data.services/data.service';

@Component({
  selector: 'app-displaycards',
  templateUrl: './displaycards.component.html',
  styleUrls: ['./displaycards.component.scss']
})
export class DisplaycardsComponent implements OnInit {
  records: any;
  note: NoteInterface;
  //hover: Boolean=false;
  message: string;
  updateMessage: string;


  constructor(private notesService: NotesService, public dialog: MatDialog, private dataService: DataService) { }
  //study thisssssssssssssssssssss
  filterTrash(records)
  {
    var newRecords = records.filter(function(note) {
      return (note.isDeleted==false && note.isArchived==false);
    })
    console.log("note", newRecords);
    return newRecords;
  }

  displayCards() {
    let options = {
      purpose: 'getNotesList'
    }
    return this.notesService.getWithToken(options).subscribe((response: any) => {
      this.records = response.data.data.reverse();
      this.records=this.filterTrash(this.records)
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
  ngOnInit() {
    this.displayCards()
    this.dataService.currentMessage.subscribe((message) => {
      this.message = message
      this.displayCards();
    });
  }


  private dialogRef;
  hover:Boolean=false;
  openDialog(record) {

    const dialogConfig = new MatDialogConfig();

    //dialogConfig.disableClose = true; //auto close if we click outse dialogbox
    dialogConfig.autoFocus = true;  //sets the focus on the first form field
    dialogConfig.data = {
      title: record.title,
      description: record.description,
      recordid:record.id,
      color:record.color
    }

    this.dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);

    this.dialogRef.afterClosed().subscribe(
      data =>{ console.log("Dialog output:", data)
      this.displayCards();}
    );
  }
  
  receiveUpdateMessage($event) {
    this.updateMessage = $event;
    this.displayCards();
  }
}
