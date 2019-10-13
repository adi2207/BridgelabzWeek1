import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service/auth.service'
import { DataService } from 'src/app/services/data.services/data.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { LabeldialogboxComponent } from '../labeldialogbox/labeldialogbox.component';
import {NotelabelService} from '../../services/note.label.service/notelabel.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  hide:Boolean=true;
  searchMessage:string;
  searchText:string;
  message:string;
  private dialogRef;
  records:any;
  constructor(public router: Router, 
    private authService:AuthService, 
    private dataService:DataService,
    public dialog: MatDialog,
    private notelabelService:NotelabelService) { }
  ngOnInit(){
    this.dataService.currentMessage.subscribe((searchMessage) => {
      this.searchMessage = searchMessage
    });
    this.dataService.currentMessage.subscribe((message)=>{
      this.message = message
      this.displayLabels();
    });
    this.router.navigate(['notes'])
  }
  onSignOut(){
    this.authService.logout();
  } 
  onSearch(){
    this.dataService.changeMessage(this.searchText);
  }
  toggle(){
    this.hide=!this.hide;
  }
  openLabelDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(LabeldialogboxComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(
      message =>{ console.log("Dialog message on close:", message)
    }
    );
  }
  displayLabels(){
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

  
}
