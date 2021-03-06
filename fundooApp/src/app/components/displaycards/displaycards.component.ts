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

  note: NoteInterface;
  message: string;
  updateMessage: string;
  checklist:string='false';

  @Input() records:any;
  @Input() trashNotes:any;
  @Input() noteType:any;
  @Output() createChecklistEvent = new EventEmitter<string>();
  @Output() messageEvent = new EventEmitter<string>();
  @Output() colorEvent = new EventEmitter<string>();
  @Output() reminderEvent = new EventEmitter<string>();
  @Output() collaboratorEvent = new EventEmitter<string>();
  @Output() labelEvent = new EventEmitter<string>();

  displayType:String="grid";

  constructor(private notesService: NotesService, public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe((message) => {
      this.message = message
      if(message=="grid"||message=="list")
      {
        this.displayType=message;
      }
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
      color:record.color,
      noteType:this.noteType,
      collaborators:record.collaborators,
      reminder:record.reminder,
      checklist:this.checklist,
      noteCheckLists:record.noteCheckLists,
      noteLabels:record.noteLabels

    }
    dialogConfig.panelClass='cardDialogBox';

    this.dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);

    this.dialogRef.afterClosed().subscribe(
      data =>{ console.log("Dialog output:", data)
      //this.messageEvent.emit("Dialog box closed")
    });
  }
  onDeleteLabelFromNote(labelId,noteId){
    let data={
      labelId:labelId,
      noteId:noteId
    }
    return this.notesService.deleteLabelFromNote(data).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit("Label deleted from note")

    }, (error) => {
      console.log(error);
      this.messageEvent.emit("Label could not be deleted from note")

    });
  }
  onDeleteReminderFromNote(reminder,recordid){
    let data={
      reminder:reminder,
      noteIdList:[recordid]
    }
    return this.notesService.deleteReminderFromNote(data).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit("Reminder deleted from note")

    }, (error) => {
      console.log(error);
      this.messageEvent.emit("Reminder could not be deleted from note")

    });
  }

  receiveUpdateMessage($event) {
    this.updateMessage=$event;
    this.messageEvent.emit(this.updateMessage);
  }

  receiveChecklistCreationMessage($event) {
    this.createChecklistEvent.emit($event);
    this.checklist='true';
  }
  receiveColorUpdateMessage($event) {
    this.colorEvent.emit($event);
  }
  receiveReminderUpdateMessage($event) {
    this.reminderEvent.emit($event);
  }
  receiveCollaboratorUpdateMessage($event) {
    this.collaboratorEvent.emit($event);
  }
  receiveLabelUpdateMessage($event) {
    this.labelEvent.emit($event);

  }
  
}
