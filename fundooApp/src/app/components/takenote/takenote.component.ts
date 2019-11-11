import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NotesService } from '../../services/notes.services/notes.service'
import { DataService } from 'src/app/services/data.services/data.service';
import { NotelabelService } from 'src/app/services/note.label.service/notelabel.service';

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
  constructor(private notesService: NotesService,private notelabelService: NotelabelService, private dataService: DataService) { }
  show: boolean = true;
  color:any;
  reminder:any;
  takeNoteCollaborators=[];
  checklist:any;
  checklistItem:any;
  labelid:any;
  labels:any;
  noteLabels=[];
  labelIdList=[];
  noteCheckLists=[];


  @Output() messageEvent = new EventEmitter<string>();
  @Output() createChecklistEvent = new EventEmitter<string>();

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
        this.takeNoteCollaborators.push(message);
        this.dataService.sendCollabDataToTakeNote(this.takeNoteCollaborators);
      }  
    })
    this.dataService.takeNoteLabelUpdate.subscribe((message)=>{
      if(message!=''){
        this.labelid=message;
        this.labelIdList.push(this.labelid);
      }  
      this.notelabelService.getLabels().subscribe((response: any) => {
        console.log(response);
        this.labels=response.data.details;
        for(var i =0;i<this.labels.length;i++){
          if(this.labels[i].id==this.labelid){
            this.noteLabels.push(this.labels[i]);
          }
        }
      }, (error) => {
        console.log(error);
      });
    })
 
  }
  toggle() {
    this.show = !this.show;
  }
  onClose() {
    this.show = !this.show;
    if(this.title.value!=undefined&&this.data.value!=undefined){
      this.note = {
        title: this.title.value,
        description: this.data.value,
        color:this.color,
        isArchived: this.isArchived,
        reminder:this.reminder,
        collaberators:JSON.stringify(this.takeNoteCollaborators),
        labelIdList:JSON.stringify(this.labelIdList),
        checklist:JSON.stringify(this.noteCheckLists)

      }
      console.log("note", this.note);
      
      this.notesService.addNote(this.note).subscribe((response) => {
        console.log(response);
        this.messageEvent.emit("New note created")
      }, (error) => {
        console.log(error);
        this.messageEvent.emit("Note could not be created")

      });
    }
    else{
      this.messageEvent.emit("Note could not be created")
    }
  
  
  }
  receiveUpdateMessage($event) {
    this.updateMessage = $event;
    console.log("hereeeeeeeeeeee", this.updateMessage)
    this.messageEvent.emit(this.updateMessage);
  }
  receiveChecklistCreationMessage($event) {
    this.createChecklistEvent.emit($event);
    this.checklist='true';
  }
  createCheckbox(){
    let data={
      'status':'open',
      'itemName':this.checklistItem
    }
    this.noteCheckLists.push(data);

}
}