import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductcartService} from '../../services/productcart/productcart.service'
// import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { DataService } from 'src/app/services/data.services/data.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss'],
  // providers: [{
  //   provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  // }]
})
export class MycartComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  cartId:any;
  typeOfService:any;

  constructor(private _formBuilder: FormBuilder,private productCartService:ProductcartService,private dataService:DataService) {}
 
  ngOnInit() {
    this.firstForm = this._formBuilder.group({});
    this.secondForm = this._formBuilder.group({
      addressControl: ['', Validators.required]
    });
    this.getCartDetails();
  }
  getCartDetails(){
    return this.productCartService.getCartDetails().subscribe((response: any) => {
      console.log(response);
      this.cartId=response.data[0].id;
      this.typeOfService=response.data[0].product.name;
    }, (error) => {
      console.log(error);
    });
  }
  onPlaceOrder(){
    let data={
      address:this.secondForm.value,
      cartId: this.cartId
    }
    return this.productCartService.placeOrder(data).subscribe((response: any) => {
      console.log(response);
      this.dataService.changeMessage("Order placed successfully");

    }, (error) => {
      console.log(error);
      this.dataService.changeMessage("Could not place the order");

    });
  }

}
