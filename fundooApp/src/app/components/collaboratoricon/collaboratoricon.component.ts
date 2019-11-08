import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CollaboratordialogboxComponent } from '../collaboratordialogbox/collaboratordialogbox.component';
import { DataService } from 'src/app/services/data.services/data.service';

@Component({
  selector: 'app-collaboratoricon',
  templateUrl: './collaboratoricon.component.html',
  styleUrls: ['./collaboratoricon.component.scss']
})
export class CollaboratoriconComponent implements OnInit {

  private dialogRef;
  updateMessage:any;
  @Input() recordid : any;
  @Output() collaboratorEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog, private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe((message) => {
      this.updateMessage=message;
    });
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass="collaboratorDialog";
    dialogConfig.data={
      recordid:this.recordid,
    };

    this.dialogRef = this.dialog.open(CollaboratordialogboxComponent,dialogConfig );

    this.dialogRef.afterClosed().subscribe(
      data =>{ console.log("Dialog output:", data)
      this.collaboratorEvent.emit("Collaborator added");
    });
  }

}
