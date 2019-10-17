import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DashboardComponent} from '../dashboard/dashboard.component'

@Component({
  selector: 'app-change-user-image',
  templateUrl: './change-user-image.component.html',
  styleUrls: ['./change-user-image.component.scss']
})
export class ChangeUserImageComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DashboardComponent>) { }

  ngOnInit() {
  }

}
