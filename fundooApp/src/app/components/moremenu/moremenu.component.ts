import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service'
import {NotelabelService} from '../../services/note.label.service/notelabel.service'
import { ShowHideDirective } from '@angular/flex-layout';
@Component({
  selector: 'app-moremenu',
  templateUrl: './moremenu.component.html',
  styleUrls: ['./moremenu.component.scss']
})
export class MoremenuComponent implements OnInit {

  note: any;
  records:any;
  labels:any;
  updateMessage:string="note updated"

  @Input() recordid : any;
  @Output() messageEvent = new EventEmitter<string>();
  show:Boolean=true;
  constructor(private notesService:NotesService,private notelabelService:NotelabelService) { }
  ngOnInit(){
    this.getLabels();
  }

  trashNote(recordid){
    let noteObj={
      'noteIdList':[recordid],
      'isDeleted':true
    }
    let options = {
      data:noteObj,
      purpose: 'trashNotes'
    }
    return this.notesService.postWithTokenNoEncoding(options).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.updateMessage)
    }, (error) => {
      console.log(error);
    });

  }

  afterLabelSelection(recordid,labelid){
    let data={
      labelId:labelid,
      noteId:[recordid]
    }
    let options = {
      data:data,
      purpose: 'addLabelToNotes'
    }
    return this.notesService.postWithTokenCreateUrl(options).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.updateMessage);
    }, (error) => {
      console.log(error);
    });
  }
  getLabels(){
    let options = {
      purpose: 'getNoteLabelList'
    }
    return this.notelabelService.getWithToken(options).subscribe((response: any) => {
      console.log(response);
      this.labels=response.data.details.reverse();
    }, (error) => {
      console.log(error);
    });
  }
  toggle(){
    this.show=!this.show;
  }
  

}
