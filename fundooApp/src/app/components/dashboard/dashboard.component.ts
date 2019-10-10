import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service/auth.service'
import {NotesService} from '../../services/notes.services/notes.service'
import {SearchfilterPipe} from '../../searchfilter.pipe';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchText:string;
  //filterPipe:SearchfilterPipe;
  filterPipe: SearchfilterPipe = new SearchfilterPipe();

  records:any;
  titleArray:Array<string>=new Array();
  filteredArray:any;
  constructor(public router: Router, private authService:AuthService, private notesService:NotesService) { }
  ngOnInit(){
    this.router.navigate(['notes'])
  }

  onSignOut(){
    this.authService.logout();
  }
  onSearch(){
    let options = {
      purpose: 'getNotesList'
    }
    return this.notesService.getWithToken(options).subscribe((response: any) => {
      console.log("in search function");
      this.records = response.data.data.reverse();
      // for(var i=0;i<this.records.length;i++){
      //   this.titleArray.push(this.records[i].title)
      // }
      this.filteredArray=this.filterPipe.transform(this.records,this.searchText);
      console.log(this.filteredArray);
    }, (error) => {
      console.log(error);
    });
  }

  
}
