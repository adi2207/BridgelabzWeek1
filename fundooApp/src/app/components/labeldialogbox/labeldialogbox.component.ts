import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {NotelabelService} from '../../services/note.label.service/notelabel.service'
import {DashboardComponent} from '../dashboard/dashboard.component'
import {AuthService} from '../../services/auth.service/auth.service'
import {DataService} from '../../services/data.services/data.service'

@Component({
  selector: 'app-labeldialogbox',
  templateUrl: './labeldialogbox.component.html',
  styleUrls: ['./labeldialogbox.component.scss']
})
export class LabeldialogboxComponent implements OnInit {

  labelName:any;
  data:any;
  records:any;
  message:string;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData,
    private notelabelService:NotelabelService,
    private authService:AuthService,
    private dataService:DataService) {
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
    this.getLabels();
  }
  onDone(){
    this.dialogRef.close("closing dialog box");
  }
  createNewLabel(){
    this.data={
      "label": this.labelName,
      "isDeleted": false,
      "userId": this.authService.getToken()
      
    }
    let options = {
      data:this.data,
      purpose: ''
    }
    return this.notelabelService.postWithTokenNoEncoding(options).subscribe((response: any) => {
      console.log(response);
      this.dataService.changeMessage(this.data.label); //check if its the right way to do things 
      this.getLabels()
    }, (error) => {
      console.log(error);
    });
  }
  getLabels(){
    let options = {
      purpose: 'getNoteLabelList'
    }
    return this.notelabelService.getWithToken(options).subscribe((response: any) => {
      console.log(response);
      this.records=response.data.details.reverse();
    }, (error) => {
      console.log(error);
    });
  }
  // onDeleteLabel(record){
  //   this.data={
  //     id:record.id,
  //     isDeleted:true
  //   }
  //   let options = {
  //     data:this.data,
  //     purpose: this.data.id+'/deleteNoteLabel'
  //   }
  //   return this.notelabelService.postWithoutToken(options).subscribe((response: any) => {
  //     console.log(response);
  //     this.getLabels();
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

}
