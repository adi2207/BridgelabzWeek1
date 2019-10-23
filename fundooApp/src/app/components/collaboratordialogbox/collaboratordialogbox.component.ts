import { Component, Inject,OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { CollaboratoriconComponent } from '../collaboratoricon/collaboratoricon.component';
import {NotesService} from '../../services/notes.services/notes.service';
import {DataService} from '../../services/data.services/data.service'
import {environment} from '../../../environments/environment'
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-collaboratordialogbox',
  templateUrl: './collaboratordialogbox.component.html',
  styleUrls: ['./collaboratordialogbox.component.scss']
})
export class CollaboratordialogboxComponent implements OnInit {

  baseUrl=environment.baseUrlPic;
  imageUrl=localStorage.getItem('profile-pic');
  updateMessage:any;
  NoteData:any;
  email=new FormControl();
    owner={
    firstName:localStorage.getItem('firstName'),
    lastName:localStorage.getItem('lastName'),
    email:localStorage.getItem('email'),
    profilepic:this.baseUrl+this.imageUrl

  }


  constructor( @Inject(MAT_DIALOG_DATA) dataReceived,private dialogRef: MatDialogRef<CollaboratoriconComponent>,private notesService:NotesService, private dataService:DataService) {
    this.NoteData= dataReceived.recordid;
    console.log("xxx",dataReceived)
    console.log("notedata",this.NoteData)

   }

  ngOnInit() {
  }
  save() {

  this.dialogRef.close("x");

  console.log(this.NoteData)
    let data={
      id:[this.NoteData],
      collaborators:[this.email.value]

    }
    this.notesService.addCollaboratorsToNote(data).subscribe((response)=>{
      console.log(response);
      this.dataService.changeMessage(this.updateMessage);
    },(error)=>{
      console.log(error);
    });

  }  
  // receiveUpdateMessage($event) {
  //   console.log("here",$event);
  //   //this.dataService.changeMessage(this.updateMessage);
  // }


}
