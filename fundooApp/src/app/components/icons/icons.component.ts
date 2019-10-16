import { Component, Output, EventEmitter,Input,OnInit} from '@angular/core';
import {NoteInterface} from '../../interfaces/note';
import {NotesService} from '../../services/notes.services/notes.service'
import {NotelabelService} from '../../services/note.label.service/notelabel.service'
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit{
 // message: string = "Saving..";
  note: any;
  records:any;
  labels:any;
  updateMessage:string="note updated"

  colorArray: any = [
    {color: '#ECEEEE'}, {color: '#F28B82'}, {color: '#F7BC04'}, {color: '#FAF474'},
    {color: '#CBFF90'}, {color: '#AAFEEB'}, {color: '#CBF0F8'}, {color: '#ADCBFA'},
    {color: '#D7AEFB'}, {color: '#FDCFE8'}, {color: '#E6C9A8'}, {color: '#FFFFFF'}];
    @Input() recordid : any;

  
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private notesService:NotesService,private notelabelService:NotelabelService) { }
  ngOnInit(){
    this.getLabels();
  }
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
    return this.notesService.createArchiveNote(this.noteObj).subscribe((response: any) => {
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
    return this.notesService.addLabelToNotes(this.data).subscribe((response: any) => {
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
  
}


