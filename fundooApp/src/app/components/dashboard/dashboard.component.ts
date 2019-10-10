import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service/auth.service'
import { DataService } from 'src/app/services/data.services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchMessage:string;
  searchText:string;
  constructor(public router: Router, private authService:AuthService, private dataService:DataService) { }
  ngOnInit(){
    this.dataService.currentMessage.subscribe((searchMessage) => {
      this.searchMessage = searchMessage
    });
    this.router.navigate(['notes'])
  }
  onSignOut(){
    this.authService.logout();
  } 
  onSearch(){
    this.dataService.changeMessage(this.searchText);
  }
}
