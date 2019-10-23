import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service/auth.service'
import { DataService } from 'src/app/services/data.services/data.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { LabeldialogboxComponent } from '../labeldialogbox/labeldialogbox.component';
import {NotelabelService} from '../../services/note.label.service/notelabel.service'
import {ChangeUserImageComponent} from '../../components/change-user-image/change-user-image.component'
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  show:Boolean=false;
  searchMessage:string;
  searchText:string;
  message:string;
  private dialogRef;
  labels:any;
  baseUrl=environment.baseUrlPic;
  updateMessage:string;
  profilepic:any;
  firstName=localStorage.getItem('firstName');
  lastName=localStorage.getItem('lastName');
  email=localStorage.getItem('email');
  grid:Boolean=false;


  constructor(public router: Router, 
    private authService:AuthService, 
    private dataService:DataService,
    public dialog: MatDialog,
    private notelabelService:NotelabelService) { }

  ngOnInit(){
    this.dataService.currentMessage.subscribe((updateMessage)=>{
      this.updateMessage = updateMessage
      this.displayLabels();
      this.getProfilePicture();

      console.log("valuessss",this.firstName)
    });
    this.router.navigate(['notes'])
  }
  onSignOut(){
    this.authService.logout();
  } 
  onSearch(){
    this.dataService.changeMessage(this.searchText);
    console.log("searchtrext1",this.searchText);
  }
  toggle(){
    this.show=!this.show;
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

    return this.notelabelService.getLabels().subscribe((response: any) => {
      console.log(response);
      this.labels=response.data.details.reverse();
    }, (error) => {
      console.log(error);
    });
  }
  onClickingLabel(labelname){
    this.router.navigate(["/labels/"+labelname]);
    this.dataService.changeMessage(labelname)
  }
  onChangeImage() {
    this.dialogRef = this.dialog.open(ChangeUserImageComponent, {
      panelClass: 'dialogboxClass'
    });
    this.dialogRef.afterClosed().subscribe(
      data =>{ console.log("Dialog output:", data)
    });
  }

  getProfilePicture(){
    let picturelink=localStorage.getItem('profile-pic');
    console.log("hkghskjd",picturelink)
    this.profilepic=this.baseUrl+picturelink;
  }
  togglegrid(){
    this.grid=!this.grid;
  }
  onGridDisplay(){
    this.dataService.changeMessage("grid");
  }
  onListDisplay(){
    this.dataService.changeMessage("list");
  }
  
}
