import { Component, OnInit ,Inject,Output, EventEmitter,Input} from '@angular/core';
import {NoteInterface} from '../../interfaces/note';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DisplaycardsComponent} from '../displaycards/displaycards.component'
import { FormControl } from '@angular/forms';
import {NotesService} from '../../services/notes.services/notes.service'
import { DataService } from 'src/app/services/data.services/data.service';
import { NotelabelService } from 'src/app/services/note.label.service/notelabel.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {
  color:any;
  note:any;
  title=new FormControl();
  data=new FormControl();
  options:any;
  //updateMessage:string="note updated";
  message:any;
  isArchived:any;
  isDeleted:any;
  reminder:any;
  collaborators:any;
  noteType:any;
  description:any;
  noteId:any;
  titlee:any;
  checklist:any;
  checklistItem:any;
  noteCheckLists:any;
  labelid:any;
  noteLabels=[];
  labels=[];

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private dialogRef: MatDialogRef<DisplaycardsComponent>,
    @Inject(MAT_DIALOG_DATA) data,private notesService:NotesService,private notelabelService:NotelabelService, private dataService:DataService) {
      this.description= data.description,
      this.titlee=data.title,
      this.noteId=data.recordid,
      this.color=data.color,
      this.reminder=data.reminder,
      this.collaborators=data.collaborators,
      this.noteType=data.noteType,
      this.checklist=data.checklist,
      this.noteCheckLists=data.noteCheckLists,
      this.noteLabels=data.noteLabels
      console.log("reminders in cons",this.reminder)
  }
  
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
    if(this.noteCheckLists!=''){
      this.checklist='true';
    }

  }
  save() {
    if(this.data.value!=null)
      this.description=this.data.value;
    if(this.title.value!=null)
      this.titlee = this.title.value;
    this.note={
      'noteId':this.noteId,
      'title':this.titlee,
      'description':this.description,
      'color':this.color
    }
    this.dialogRef.close(this.note);

    this.notesService.updateNote(this.note).subscribe((response)=>{
      console.log(response);
      this.dataService.changeMessage("Note updated");
    },(error)=>{
      console.log(error);
    });

  }  
  receiveUpdateMessage($event) {
    this.dataService.changeMessage($event);
  }
  receiveColorUpdateMessage($event){
    this.dataService.changeMessage($event);
    this.dataService.dialogBoxColorUpdate.subscribe(message => this.color = message);
  }
  receiveLabelUpdateMessage($event){
    this.dataService.dialogBoxLabelUpdate.subscribe(message => {
      this.dataService.changeMessage($event);
      this.labelid = message
  
    this.notelabelService.getLabels().subscribe((response: any) => {
      this.labels=response.data.details;
      for(var i =0;i<this.labels.length;i++){
        if(this.labels[i].id==this.labelid){
          this.noteLabels.push(this.labels[i]);
        }
      }
      this.dataService.changeMessage($event);
    }, (error) => {
      console.log(error);
      //this.dataService.changeMessage();

    });
  });
  }
  receiveCollaboratorUpdateMessage($event){
    this.dataService.dialogBoxCollaboratorUpdate.subscribe(message => this.collaborators.push(message));
    this.dataService.changeMessage($event);

  }
  receiveReminderUpdateMessage($event){
    this.dataService.dialogBoxReminderUpdate.subscribe(message => {this.reminder = message})
    this.dataService.changeMessage($event);

  }
  createCheckbox(){
  let data={
    'status':'open',
    'itemName':this.checklistItem
  }
  this.notesService.addToChecklist(data,this.noteId).subscribe((response:any)=>{
    console.log(response);
    this.noteCheckLists.push(response.data.details);
    this.dataService.changeMessage("Checklist added");
  },(error)=>{
    console.log(error);
    this.dataService.changeMessage("Checklist could not be added");

  });
  }
  receiveChecklistCreationMessage($event) {
    this.dataService.changeMessage($event);
    this.checklist='true';
  }

}


