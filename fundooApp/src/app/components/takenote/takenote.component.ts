import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NotesService } from '../../services/notes.services/notes.service'
import { NoteInterface } from '../../interfaces/note'
import { DataService } from 'src/app/services/data.services/data.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  isNote = 'note';
  isArchived='false';
  data = new FormControl();
  title = new FormControl();
  note: any;
  options: any;
  updateMessage: string;
  constructor(private notesService: NotesService, private dataService: DataService) { }
  show: boolean = true;
  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
  }
  onClose() {
    this.show = !this.show;
    this.note = {
      title: this.title.value,
      description: this.data.value,
    }
    this.notesService.addNote(this.note).subscribe((response) => {
      console.log(response);
      this.messageEvent.emit(this.updateMessage)
      this.updateMessage = null;
    }, (error) => {
      console.log(error);
    });
  }
  receiveUpdateMessage($event) {
    this.updateMessage = $event;
    console.log("hereeeeeeeeeeee", this.updateMessage)
    this.messageEvent.emit(this.updateMessage);
  }

}
