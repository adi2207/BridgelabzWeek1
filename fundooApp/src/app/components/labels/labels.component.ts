import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes.services/notes.service'
import { DataService } from '../../services/data.services/data.service'

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private notesService: NotesService,private dataService: DataService) { }
  labelname: string;
  message: string;
  records:any;
  isDeleted="false";
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      this.message = message;
      this.labelname = this.route.snapshot.paramMap.get('labelname');
      localStorage.setItem('labelname', this.labelname);
      this.getNotesByLabelName();
    })

  }

  getNotesByLabelName() {
    let data = {
      labelName: this.labelname
    }
    return this.notesService.getNotesByLabelName(data).subscribe((response: any) => {
      console.log(response);
      this.records=response.data.data.reverse();
    }, (error) => {
      console.log(error);
    });
  }



}
