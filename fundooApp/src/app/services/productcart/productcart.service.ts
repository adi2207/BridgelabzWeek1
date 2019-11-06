import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpService} from '../http.services/http.service'
@Injectable({
  providedIn: 'root'
})
export class ProductcartService {

  baseUrl=environment.baseUrl;
  constructor(private http:HttpService) { }

  placeOrder(data){
    return this.http.postCallWithToken(this.baseUrl+'productcarts/placeOrder',data);

  }
  getCartDetails(){
    return this.http.getCallWithToken(this.baseUrl+'productcarts/myCart');
  }
}
