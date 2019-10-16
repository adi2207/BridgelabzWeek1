import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
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
  @Output() messageEvent = new EventEmitter<string>();

  note: NoteInterface;
  message: string;
  updateMessage: string;

  @Input() records:any;
  @Input() trashNotes:any;
  @Input() isDeleted:any;

  constructor(private notesService: NotesService, public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe((message) => {
      this.message = message
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
      this.messageEvent.emit(this.updateMessage)
    });
  }
  receiveUpdateMessage($event) {
    this.updateMessage=$event;
    this.messageEvent.emit(this.updateMessage);
  }
}
