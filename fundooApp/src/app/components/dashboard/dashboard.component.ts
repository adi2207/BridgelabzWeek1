import { Component, OnInit } from '@angular/core';
import {IconsComponent} from '../icons/icons.component';
import {TakenoteComponent} from '../takenote/takenote.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router) { }
  ngOnInit(){
    this.router.navigate(['notes'])
  }

  
}
