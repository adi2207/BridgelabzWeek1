import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes.services/notes.service'
import { DataService } from '../../services/data.services/data.service'

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private notesService: NotesService,private dataService: DataService) { }
  labelname: string;
  message: string;
  records:any;
  noteType="labels";
  ngOnInit() {
    this.dataService.currentLabel.subscribe(message => {
      this.labelname=message;
      this.getNotesByLabelName();
    });

  }


  getNotesByLabelName() {
  
    let data = {
      labelName: this.labelname
    }
    return this.notesService.getNotesByLabelName(data).subscribe((response: any) => {
      console.log(response);
      this.records=response.data.data.reverse();
    }, (error) => {
      console.log(error);
    });
  }
  receiveUpdateMessage($event) {
    this.dataService.changeMessage($event);
    this.getNotesByLabelName();
  }
receiveColorUpdateMessage($event) {
  this.dataService.changeMessage($event);
  this.getNotesByLabelName();
}
receiveReminderUpdateMessage($event) {
  this.dataService.changeMessage($event);
  this.getNotesByLabelName();
}
receiveCollaboratorUpdateMessage($event) {
  this.dataService.changeMessage($event);
  this.getNotesByLabelName();
}
receiveChecklistCreationMessage($event) {
  this.dataService.changeMessage($event);
  this.getNotesByLabelName();
}
receiveLabelUpdateMessage($event) {
  this.dataService.changeMessage($event);
  this.getNotesByLabelName();
}



}
