import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent{

  //@Input() notedata : String;
  @Input() title:String;
  constructor() { }
  onSave(){
    //console.log(notedata);
    //console.log(title);
  }

}
