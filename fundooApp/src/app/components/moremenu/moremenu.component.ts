import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service'
import {NotelabelService} from '../../services/note.label.service/notelabel.service'
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
  constructor(private notesService:NotesService,private notelabelService:NotelabelService) { }
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
      this.messageEvent.emit(this.updateMessage)
    }, (error) => {
      console.log(error);
    });

  }

  afterLabelSelection(labelid){
    let data={
      labelId:labelid,
      noteId:[this.recordid]
    }
    return this.notesService.addLabelToNotes(data).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.updateMessage);
    }, (error) => {
      console.log(error);
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
      this.messageEvent.emit(this.updateMessage);
    }, (error) => {
      console.log(error);
    });
  }
  onRestoreNote(){
    let noteObj={
      'noteIdList':[this.recordid],
      'isDeleted':false
    }
    return this.notesService.createTrashNotes(noteObj).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.updateMessage);
    }, (error) => {
      console.log(error);
    });
  }
  createChecklist(){
    console.log("DDD")
    this.messageEvent.emit(this.updateMessage);
  }
}
