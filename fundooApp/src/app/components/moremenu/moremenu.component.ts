import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service'
import {NotelabelService} from '../../services/note.label.service/notelabel.service'
import {DataService} from '../../services/data.services/data.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-moremenu',
  templateUrl: './moremenu.component.html',
  styleUrls: ['./moremenu.component.scss']
})
export class MoremenuComponent implements OnInit {

  @Input() isDeleted:any;
  @Input() isNote:any;

  note: any;
  records:any;
  labels:any;
  updateMessage:string="note updated"
  x:any;
  @Input() recordid : any;

  @Output() messageEvent = new EventEmitter<string>();
  show:Boolean=true;
  constructor(private dataService:DataService,private router:Router,private notesService:NotesService,private notelabelService:NotelabelService) { }
  ngOnInit(){
    this.getLabels();
  }

  trashNote(){
    let noteObj={
      'noteIdList':[this.recordid],
      'isDeleted':true
    }
    return this.notesService.createTrashNotes(noteObj).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit("Note trashed")
    }, (error) => {
      console.log(error);
      this.messageEvent.emit("Note could not be trashed")

    });

  }

  afterLabelSelection(labelid){
    let data={
      labelId:labelid,
      noteId:[this.recordid]
    }
    return this.notesService.addLabelToNotes(data).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit("Label added");
    }, (error) => {
      console.log(error);
      this.messageEvent.emit("Label could not be added");

    });
  }
  getLabels(){
    return this.notelabelService.getLabels().subscribe((response: any) => {
      console.log(response);
      this.labels=response.data.details.reverse();
    }, (error) => {
      console.log(error);
    });
  }
   deleteNoteForever(){
    let noteObj={
      'noteIdList':[this.recordid],
      'isDeleted':true
    }
    return this.notesService.deleteNoteForever(noteObj).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit("Note deleted forever");
    }, (error) => {
      console.log(error);
      this.messageEvent.emit("Note could not be deleted forever");

    });
  }
  onRestoreNote(){
    let noteObj={
      'noteIdList':[this.recordid],
      'isDeleted':false
    }
    return this.notesService.createTrashNotes(noteObj).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit("Note restored");
    }, (error) => {
      console.log(error);
      this.messageEvent.emit("Note could not be restored");

    });
  }
  createChecklist(){
    console.log("DDD")
    this.messageEvent.emit("create checklist");
  }
  onAskQuestion(){
    this.router.navigate(['/questionanswer/'+this.recordid]);
    this.dataService.changeMessage(this.recordid)
  }

}
