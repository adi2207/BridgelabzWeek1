import { Component, Output, EventEmitter,Input} from '@angular/core';
import {NoteInterface} from '../../interfaces/note';
import {NotesService} from '../../services/notes.services/notes.service'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent{
 // message: string = "Saving..";
  note: any;
  records:any;
  updateMessage:string="note updated"
  @Input() recordid : any;

  colorArray: any = [
    {color: '#ECEEEE'}, {color: '#F28B82'}, {color: '#F7BC04'}, {color: '#FAF474'},
    {color: '#CBFF90'}, {color: '#AAFEEB'}, {color: '#CBF0F8'}, {color: '#ADCBFA'},
    {color: '#D7AEFB'}, {color: '#FDCFE8'}, {color: '#E6C9A8'}, {color: '#FFFFFF'}];

  
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private notesService:NotesService) { }
  changeColor(color,recordid){
    this.note = {
      'noteIdList': [recordid],
      'color': color,

    };
    const options = {
      data: this.note,
      purpose: 'changesColorNotes',

    };
    this.notesService.postWithTokenNoEncoding(options).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.updateMessage)
    }, (error) => {
      console.log(error);
    });

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
  archiveNote(recordid){
    let noteObj={
      'noteIdList':[recordid],
      'isArchived':true
    }
    let options = {
      data:noteObj,
      purpose: 'archiveNotes'
    }
    return this.notesService.postWithTokenNoEncoding(options).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(this.updateMessage)
    }, (error) => {
      console.log(error);
    });

  }
  
}


