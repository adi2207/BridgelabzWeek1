import { Component, Inject,OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { CollaboratoriconComponent } from '../collaboratoricon/collaboratoricon.component';
import {NotesService} from '../../services/notes.services/notes.service';
import {DataService} from '../../services/data.services/data.service'
import {environment} from '../../../environments/environment'
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {UserService} from '../../services/user.services/user.service'
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
  searchVal:any;
    owner={
    firstName:localStorage.getItem('firstName'),
    lastName:localStorage.getItem('lastName'),
    email:localStorage.getItem('email'),
    profilepic:this.baseUrl+this.imageUrl

  }
  myControl=new FormControl();

  constructor( private userService:UserService,@Inject(MAT_DIALOG_DATA) dataReceived,private dialogRef: MatDialogRef<CollaboratoriconComponent>,private notesService:NotesService, private dataService:DataService) {
    this.NoteData= dataReceived.recordid;

   }
  records:any;
  filteredRecords: any;
  x:any;
  note:any;
  recordss=new Array;
  ngOnInit() {
    this.getCollaborators()
  }

  filter(searchText) {
    this.x=this.records.filter(record => record.email.toLowerCase().includes(searchText.toLowerCase()));
    console.log("xxxx",this.x);
    return this.x;
  }
  
  searchUsers(searchVal){
    let data={
      searchWord:searchVal
    }
    return this.userService.searchUserList(data).subscribe((response: any) => {
      this.records=response.data.details;
      this.filteredRecords = this.myControl.valueChanges.pipe(
        startWith(''),
        map(val => this.filter(val))
      );
      console.log("filtered recs",this.filteredRecords)
    }, (error) => {
      console.log(error);
    });
  } 
  save() {
    this.dialogRef.close(this.recordss);
    } 
  onDone(){
    console.log("hereeeeeee",this.NoteData)

    if(this.NoteData==undefined){
      let data={
        firstName:this.x[0].firstName,
        lastName:this.x[0].lastName,
        email :this.x[0].email,
        userId:this.x[0].userId
        }
      //let stringifiedData=JSON.stringify(data);
      this.recordss.push(data);
      this.dataService.updateTakeNoteCollaborator(this.x[0]);
    }
    else{
      let data={
      'email':this.x[0].email,
      'firstName':this.x[0].firstName,
      'lastName':this.x[0].lastName,
      'userId':this.x[0].userId,
      'id':this.NoteData
      }
      this.notesService.addCollaboratorsToNote(data).subscribe((response)=>{
        console.log(response);
        this.dataService.changeMessage("Collaborator added");
        this.dataService.updateDialogBoxCollaborator(data);
        this.getCollaborators();
      },(error)=>{
        console.log(error);
        this.dataService.changeMessage("Collaborator could not be added");
      });
    }

  }

  getCollaborators(){
    let data={
      id:this.NoteData
    }
    this.notesService.patchNoteDetails(data).subscribe((response:any) => {
      this.recordss=response.collaborators.reverse();
      console.log("recordss",this.recordss)
      this.note=response;
    }, (error) => {
      console.log(error);
    });
    
  }
  deleteCollaboratorFromNote(record) {
    let data = {
      id: this.note.id,
      userId: record.userId
    }
    return this.notesService.deleteCollaboratorFromNote(data).subscribe((response: any) => {
      console.log(response);
      this.getCollaborators();
      this.dataService.changeMessage("Collaborator deleted");
    }, (error) => {
      console.log(error);
      this.dataService.changeMessage("Collaborator could not be deleted");

    });
  }
}
