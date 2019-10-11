import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetusersComponent implements OnInit {

  records:any;
  constructor() { }

  ngOnInit() {
    $(function () {
      this.options = {
        purpose: 'getAdminUserList'
      }
      $.get(environment.baseUrl + this.options.purpose,(response,error) => {
        if (response) {
          console.log(response);
          this.records=response.data.data;
        }
        else
          console.log(error);
      });
    });
  }
}
