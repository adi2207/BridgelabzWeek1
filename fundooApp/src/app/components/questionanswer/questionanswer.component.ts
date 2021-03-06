import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes.services/notes.service'
import { DataService } from '../../services/data.services/data.service'
import { QuestionanswerService } from '../../services/questionanswer.services/questionanswer.service'
import { ShowHideDirective } from '@angular/flex-layout';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-questionanswer',
  templateUrl: './questionanswer.component.html',
  styleUrls: ['./questionanswer.component.scss']
})
export class QuestionanswerComponent implements OnInit {

  constructor(private questionanswerService: QuestionanswerService, private route: ActivatedRoute, private notesService: NotesService, private dataService: DataService) { }
  recordid: string;
  record: any;
  questionAsked: any;
  questionDisplayed: any;
  questionPosted: string = "true";
  questionAndAnswers: any;
  approvedQuesAns = new Array;
  replySent: any;
  show: boolean = false;
  likeCount=new Array();
  count=0;
  parentId: any;
  like: boolean;
  owner = {
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName')
  }
  ngOnInit() {
    this.dataService.questionAsked.subscribe(message => {
      this.recordid = message;
      this.getNoteDetails();
    });
  }
  getNoteDetails() {
    let data = {
      'id': this.recordid
    }
    return this.notesService.getNoteDetails(data).subscribe((response: any) => {
      console.log(response);
      this.record = response.data.data[0];
      if (response.data.data[0].questionAndAnswerNotes.length > 0) {
        this.questionPosted = "true";
      }
      else {
        this.questionPosted = "false";
      }
      this.questionAndAnswers = this.record.questionAndAnswerNotes;
      for (var i = 0; i < this.questionAndAnswers.length; i++) {
        if (this.questionAndAnswers[i].isApproved == true) {
          this.approvedQuesAns.push(this.questionAndAnswers[i]);
          for (var j = 0; j < this.questionAndAnswers[i].like.length; j++) {
            if (this.questionAndAnswers[i].like[j].like == true) {
              this.likeCount[j] = this.likeCount[j] + 1;
            }
          }
        }
      }

    }, (error) => {
      console.log(error);
    });
  }
  afterAskingQues() {
    let data = {
      message: this.questionAsked,
      notesId: this.recordid
    }
    return this.questionanswerService.askQuestion(data).subscribe((response: any) => {
      console.log(response);
      this.getNoteDetails();
    }, (error) => {
      console.log(error);
    });
  }
  afterClickingReply() {
    let data = {
      message: this.replySent,
      id: this.parentId
    }
    return this.questionanswerService.postReply(data).subscribe((response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
  toggle(parentId) {
    this.show = true;
    this.parentId = parentId
  }
  likeDislike(parentId) {
    this.like = !this.like;
    let data = {
      like: this.like
    }
    return this.questionanswerService.likeDislike(parentId, data).subscribe((response: any) => {
      console.log(response);
      this.getNoteDetails()
    }, (error) => {
      console.log(error);
    });
  }

}
