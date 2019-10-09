import { Component, OnInit, Inject } from '@angular/core';
import { NotesService } from '../../services/notes.services/notes.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { NoteInterface } from '../../interfaces/note';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-displaycards',
  templateUrl: './displaycards.component.html',
  styleUrls: ['./displaycards.component.scss']
})
export class DisplaycardsComponent implements OnInit {
  records: any;
  note: NoteInterface;
  hover: Boolean=false;

  constructor(private notesService: NotesService, public dialog: MatDialog) { }
  ngOnInit() {

    let options = {
      purpose: 'getNotesList'
    }
    return this.notesService.getWithToken(options).subscribe((response: any) => {
      this.records = response.data.data.reverse();
      console.log(response);
    }, (error) => {
      console.log(error);
    });

  }
  openDialog(record) {

    const dialogConfig = new MatDialogConfig();

    //dialogConfig.disableClose = true; //auto close if we click outse dialogbox
    dialogConfig.autoFocus = true;  //sets the focus on the first form field
    dialogConfig.data={
      title:record.title,
      description:record.description
    }
  
  const dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(
    data => console.log("Dialog output:", data)
); 

  }
}
