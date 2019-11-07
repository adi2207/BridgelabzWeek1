import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-unapproved-answers',
  templateUrl: './unapproved-answers.component.html',
  styleUrls: ['./unapproved-answers.component.css']
})
export class UnapprovedAnswersComponent implements OnInit {

  records:any;
  options:any;
  constructor() { }

  ngOnInit() {
     this.getUnapprovedAnswersList();
  }
 
  getUnapprovedAnswersList(){
    $.ajax({
      url: environment.baseUrl+'questionAndAnswerNotes/getUnApprovedAnswer',
      headers:{  Authorization:localStorage.getItem('id') },
      contentType: "application/json",
      type: 'GET',
      dataType: "json",
      success: (response) => {
        console.log(response)
        this.records=response.data.reverse();
      }
    });
  }
  onApprove(answerId){
    $.ajax({
      url: environment.baseUrl+"questionAndAnswerNotes/approve/"+ answerId,
      headers:{  Authorization:localStorage.getItem('id') },
      contentType: "application/json",
      type: 'POST',
      dataType: "json",
      success: (response) => {
        console.log(response);
        this.getUnapprovedAnswersList(); 
      }
    }); 
   }
   onReject(answerId){
    $.ajax({
      url: environment.baseUrl+"questionAndAnswerNotes/reject/"+ answerId,
      headers:{  Authorization:localStorage.getItem('id') },
      contentType: "application/json",
      type: 'POST',
      dataType: "json",
      success: (response) => {
        console.log(response)
        this.getUnapprovedAnswersList();
      }
    }); 
   }

}
