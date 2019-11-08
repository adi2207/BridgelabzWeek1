import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NotesService } from '../../services/notes.services/notes.service'
import { DataService } from 'src/app/services/data.services/data.service';
@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  @Input () takeNoteType:any;
  @Input () noteType:any;

  data = new FormControl();
  title = new FormControl();
  note: any;
  isArchived:boolean;
  options: any;
  updateMessage: string;
  constructor(private notesService: NotesService, private dataService: DataService) { }
  show: boolean = true;
  color:any;
  reminder:any;
  collaborator:any;
  collaborators=[];
  collabs:any;

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    this.dataService.takeNoteArchiveUpdate.subscribe((message)=>{
      this.isArchived=message;
    })
    this.dataService.takeNoteColorUpdate.subscribe((message)=>{
      this.color=message;
    })
    this.dataService.takeNoteReminderUpdate.subscribe((message)=>{
      this.reminder=message;
    })
    this.dataService.takeNoteCollaboratorUpdate.subscribe((message)=>{
      if(message!=''){
        this.collaborator=message;
        this.collaborators.push(this.collaborator);
      }  
    })
 
  }
  toggle() {
    this.show = !this.show;
  }
  onClose() {
 console.log("collabbbbbbbbbb",this.collaborators)
//  this.collabs=JSON.stringify(this.collaborators);

    this.show = !this.show;
      this.note = {
        title: this.title.value,
        description: this.data.value,
        color:this.color,
        isArchived: this.isArchived,
        reminder:this.reminder,
        collaberators:(this.collaborators)

      }
      console.log("note", this.note);
      
      this.notesService.addNote(this.note).subscribe((response) => {
        console.log(response);
        this.messageEvent.emit("New note created")
        this.updateMessage = null;
      }, (error) => {
        console.log(error);
        this.messageEvent.emit("Note could not be created")

      });
  
  }
  receiveUpdateMessage($event) {
    this.updateMessage = $event;
    console.log("hereeeeeeeeeeee", this.updateMessage)
    this.messageEvent.emit(this.updateMessage);
  }

}
