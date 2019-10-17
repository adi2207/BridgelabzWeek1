import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpService } from '../http.services/http.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotelabelService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpService) { }

  createLabel(data) {
    return this.http.postCallWithToken(this.baseUrl + 'noteLabels/', data)
  }
  getLabels() {
    return this.http.getCallWithToken(this.baseUrl + 'noteLabels/getNoteLabelList')

  }
  deleteLabel(data) {

    return this.http.deleteCallWithToken(this.baseUrl + 'noteLabels/' + data.id + '/deleteNoteLabel')

  }
  renameLabel(data) {
    return this.http.deleteCallWithToken(this.baseUrl + 'noteLabels/' + data.id + '/updateNoteLabel')

  }
}









