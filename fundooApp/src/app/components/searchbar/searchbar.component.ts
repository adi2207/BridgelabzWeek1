import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes.services/notes.service'
import {SearchfilterPipe} from '../../services/search.filter.pipe/searchfilter.pipe';
import { DataService } from 'src/app/services/data.services/data.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchText:string;
  filterPipe: SearchfilterPipe = new SearchfilterPipe();
  records:any;
  filteredRecords:any;
  updateMessage:string;
  constructor(private notesService:NotesService,private dataService:DataService) { }

  ngOnInit() {
    this.searchNote()
  }
  filterDeleted(records)
  {
    var newRecords = records.filter(function(note) {
      return (note.isDeleted==false);
    })
    console.log("note", newRecords);
    return newRecords;
  }
  searchNote(){
    this.dataService.currentMessage.subscribe((searchText) => {
      this.searchText = searchText
    });
    return this.notesService.getNotes().subscribe((response: any) => {
      this.records = response.data.data.reverse();
      this.records=this.filterDeleted(this.records);
      this.filteredRecords=this.filterPipe.transform(this.records,this.searchText);
      console.log(this.filteredRecords);
    }, (error) => {
      console.log(error);
    });
  }
  receiveUpdateMessage($event) {
    this.updateMessage = $event;
    this.searchNote();
  }


}
