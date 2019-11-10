import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icontray',
  templateUrl: './icontray.component.html',
  styleUrls: ['./icontray.component.scss']
})
export class IcontrayComponent implements OnInit {

  updateMessage:string;
  @Input () recordid:any;
  @Input () questionAsked:any;

  @Input() noteType:any;
  @Input() takeNoteType:any;
  @Output() messageEvent = new EventEmitter<string>();
  @Output() colorEvent = new EventEmitter<string>();
  @Output() reminderEvent = new EventEmitter<string>();
  @Output() collaboratorEvent = new EventEmitter<string>();
  @Output() createChecklistEvent = new EventEmitter<string>();
  @Output() labelEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }
  receiveUpdateMessage($event) {
    this.messageEvent.emit($event);
  }
  receiveColorUpdateMessage($event) {
    this.colorEvent.emit($event);
  }
  receiveReminderUpdateMessage($event) {
    this.reminderEvent.emit($event);
  }
  receiveCollaboratorUpdateMessage($event) {
    this.collaboratorEvent.emit($event);
  }
  receiveChecklistCreationMessage($event) {
    this.createChecklistEvent.emit($event);
  }
  receiveLabelUpdateMessage($event) {
    this.labelEvent.emit($event);

  }

}
