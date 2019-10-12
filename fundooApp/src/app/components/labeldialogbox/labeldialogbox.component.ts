import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {NotelabelService} from '../../services/note.label.service/notelabel.service'
import {DashboardComponent} from '../dashboard/dashboard.component'
import { FormControl } from '@angular/forms';
import {AuthService} from '../../services/auth.service/auth.service'
@Component({
  selector: 'app-labeldialogbox',
  templateUrl: './labeldialogbox.component.html',
  styleUrls: ['./labeldialogbox.component.scss']
})
export class LabeldialogboxComponent implements OnInit {

  labelName:any;
  data:any;
  constructor(private dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData,private notelabelService:NotelabelService,private authService:AuthService) {
  }

  ngOnInit() {
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
    }, (error) => {
      console.log(error);
    });
  }

}
