import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('Dashboard opened');
  currentMessage = this.messageSource.asObservable();
  private typeOfServiceSource = new BehaviorSubject('');
  currentService = this.typeOfServiceSource.asObservable();
  private cartIdSource = new BehaviorSubject('');
  cartId = this.cartIdSource.asObservable();
  private takeNoteArchiveSource = new BehaviorSubject(false);
  takeNoteArchiveUpdate = this.takeNoteArchiveSource.asObservable();
  private takeNoteColorSource = new BehaviorSubject('');
  takeNoteColorUpdate = this.takeNoteColorSource.asObservable();
  private takeNoteCollaboratorSource = new BehaviorSubject('');
  takeNoteCollaboratorUpdate = this.takeNoteCollaboratorSource.asObservable();
  private takeNoteReminderSource = new BehaviorSubject('');
  takeNoteReminderUpdate = this.takeNoteReminderSource.asObservable();
  private dialogBoxColorSource = new BehaviorSubject('');
  dialogBoxColorUpdate = this.dialogBoxColorSource.asObservable();
  private dialogBoxCollaboratorSource = new BehaviorSubject('');
  dialogBoxCollaboratorUpdate = this.dialogBoxCollaboratorSource.asObservable();
  private dialogBoxReminderSource = new BehaviorSubject('');
  dialogBoxReminderUpdate = this.dialogBoxReminderSource.asObservable();

  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeTypeOfService(message: string){
    this.typeOfServiceSource.next(message)
  }
  sendCartId(message: string){
    this.cartIdSource.next(message)
  }
  updateTakeNoteArchive(message: boolean){
    this.takeNoteArchiveSource.next(message)
  }
  updateTakeNoteColor(message: string){
    this.takeNoteColorSource.next(message)
  }
  updateTakeNoteReminder(message: any){
    this.takeNoteReminderSource.next(message)
  }
  updateTakeNoteCollaborator(message: any){
    this.takeNoteCollaboratorSource.next(message)
  }
  updateDialogBoxColor(message: any){
    this.dialogBoxColorSource.next(message)
  }
  updateDialogBoxReminder(message: any){
    this.dialogBoxReminderSource.next(message)
  }
  updateDialogBoxCollaborator(message: any){
    this.dialogBoxCollaboratorSource.next(message)
  }

}