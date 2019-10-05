import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent{
  message: string = "Saving.."
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }
 
  onClose(){
    this.messageEvent.emit(this.message);
    
  }

}
