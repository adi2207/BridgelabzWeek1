import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes.services/notes.service'
import { DataService } from '../../services/data.services/data.service'
import { QuestionanswerService } from '../../services/questionanswer.services/questionanswer.service'

@Component({
  selector: 'app-questionanswer',
  templateUrl: './questionanswer.component.html',
  styleUrls: ['./questionanswer.component.scss']
})
export class QuestionanswerComponent implements OnInit {

  constructor(private questionanswerService:QuestionanswerService,private route: ActivatedRoute, private notesService: NotesService,private dataService: DataService) { }
  recordid: string;
  record:any;
  questionAsked:any;
  questionDisplayed:any;
  questionPosted:string="true";
  questionAndAnswers:any;
  approvedQuesAns=new Array;
  replySent:any;
  owner={
    firstName:localStorage.getItem('firstName'),
    lastName:localStorage.getItem('lastName')
  }
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      this.recordid=message;
      console.log("recordid",this.recordid)
      this.getNoteDetails();
    });
  }
  getNoteDetails(){
    let data={
      'id':this.recordid
    }
    return this.notesService.getNoteDetails(data).subscribe((response: any) => {
      console.log(response);
      this.record=response.data.data[0];
      this.questionAndAnswers=this.record.questionAndAnswerNotes;
      for(var i=0;i<this.questionAndAnswers.length;i++){
        if(this.questionAndAnswers[i].isApproved==true){
        this.approvedQuesAns.push(this.questionAndAnswers[i]);
        }
      }
    }, (error) => {
      console.log(error);
    });
  }
  afterAskingQues(){
    let data={
      message: this.questionAsked, 
      notesId: this.recordid
    }
    return this.questionanswerService.askQuestion(data).subscribe((response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
  afterClickingReply(parentId){
    let data={
      message: this.replySent, 
      id: parentId
    }
    return this.questionanswerService.postReply(data).subscribe((response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

}
