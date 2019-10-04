import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
   //notedata="ksjgxyixgasuihcac";
   titleee=new FormControl();
   title=this.titleee.value;
  constructor() { }
  ngOnInit() {
    console.log(this.titleee.value);

  }

}
