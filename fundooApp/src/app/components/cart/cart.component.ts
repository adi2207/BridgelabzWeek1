import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.services/data.service';
import {ProductcartService} from '../../services/productcart/productcart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productId:any;
  generatedCartId:any;
  constructor(private router:Router,private dataService:DataService,private productcartService:ProductcartService) { }

  ngOnInit() {
  }
  onAddToCart(typeOfService){
    if(typeOfService=='advance'){
      this.productId="5bfe361553c3df0040d852a6";
    }
    else if(typeOfService=='basic'){
      this.productId="5bfe362b53c3df0040d852a7";
    }
    let data= {
      productId:this.productId
    }
    this.productcartService.addToCart(data).subscribe((response:any)=>{
      console.log(response);
      this.generatedCartId=response.data.details.id;
      this.router.navigate(["/register"]);
      this.dataService.changeTypeOfService(typeOfService);
      this.dataService.sendCartId(this.generatedCartId);
    },(error)=>{
      console.log(error);
    });
  }
    


}
