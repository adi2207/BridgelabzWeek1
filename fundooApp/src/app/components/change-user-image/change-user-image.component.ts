import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DashboardComponent } from '../dashboard/dashboard.component'
import { UserService } from '../../services/user.services/user.service'
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {DataService} from '../../services/data.services/data.service'
@Component({
  selector: 'app-change-user-image',
  templateUrl: './change-user-image.component.html',
  styleUrls: ['./change-user-image.component.scss']
})
export class ChangeUserImageComponent implements OnInit {

  imageChangeEvent: any;
  croppedImage: any;

  constructor(private dataService:DataService,private dialogRef: MatDialogRef<DashboardComponent>, private userService: UserService) { }

  ngOnInit() {
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log("thissssss",event)
    this.croppedImage = event.file;
  }

  onFileChanged(event) {
    this.imageChangeEvent = event;
    console.log(event);
  }

  onUpload() {
    const file = new FormData();
    file.append('file', this.croppedImage);

    this.userService.uploadPicture(file)
      .subscribe((response:any) => {
        console.log(response)
        localStorage.setItem('profile-pic',response.status.imageUrl);
        this.dataService.changeMessage("ooooooooooo")
        this.dialogRef.close();
      }, (error) => {
        console.log(error)
      });

  }
  onCancel() {
    this.dialogRef.close();
  }

}
