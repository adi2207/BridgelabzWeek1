import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit() {
  }
  onAddToCart(typeOfService){
    this.router.navigate(["/register"]);
    this.dataService.changeMessage(typeOfService)
  }

}
