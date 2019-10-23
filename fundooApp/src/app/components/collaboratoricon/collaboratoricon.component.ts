import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CollaboratordialogboxComponent } from '../collaboratordialogbox/collaboratordialogbox.component';

@Component({
  selector: 'app-collaboratoricon',
  templateUrl: './collaboratoricon.component.html',
  styleUrls: ['./collaboratoricon.component.scss']
})
export class CollaboratoriconComponent implements OnInit {

  private dialogRef;
  updateMessage:any;
  @Input() recordid : any;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass="collaboratorDialog";
    dialogConfig.data={
      recordid:this.recordid
    };
    console.log("yyy", dialogConfig.data)

    this.dialogRef = this.dialog.open(CollaboratordialogboxComponent,dialogConfig );

    this.dialogRef.afterClosed().subscribe(
      data =>{ console.log("Dialog output:", data)
      this.messageEvent.emit(this.updateMessage)
    });
  }

}
