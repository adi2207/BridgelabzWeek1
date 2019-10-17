import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icontray',
  templateUrl: './icontray.component.html',
  styleUrls: ['./icontray.component.scss']
})
export class IcontrayComponent implements OnInit {

  updateMessage:string;
  @Input () recordid:any;
  @Input () isNote:any;
  @Input() isDeleted:any;
  @Input() isArchived:any;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  receiveUpdateMessage($event) {
    this.updateMessage=$event;
    this.messageEvent.emit(this.updateMessage);
  }

}
