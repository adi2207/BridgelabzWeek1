import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service';
import {NotelabelService} from '../../services/note.label.service/notelabel.service'


@Component({
  selector: 'app-colorsicon',
  templateUrl: './colorsicon.component.html',
  styleUrls: ['./colorsicon.component.scss']
})
export class ColorsiconComponent implements OnInit {

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
  }
  changeColor(color){
    if(this.recordid!=null){
      this.note = {
        'noteIdList': [this.recordid],
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
    else{
      this.messageEvent.emit(color);
    }

  }
  
  
  

}
