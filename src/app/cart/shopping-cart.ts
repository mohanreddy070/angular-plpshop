import { Component, OnInit } from '@angular/core';
import {cartService} from './cartService';
import {product} from '../product';
import {productsCollection} from '../product';
@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.html'
})

export default class shoppingCart implements OnInit {
    constructor(private cart_Service :cartService){
    }
    Products : product[]
    ngOnInit(){
      // ocking as this ide doesn't support server side 
      //console.log(this.cart_Service.getAllProducts());
      this.Products =  productsCollection;
      //this.Products =  this.cart_Service.getAllProducts;
    }

    descendingPriceData() {
    return this.Products.sort((a, b) => {
      return b.price - a.price;
    });
  }

   ascendingPriceData() {
    return this.Products.sort((a, b) => {
      return a.price - b.price;
    });
   }

    descendingRatingData() {
    return this.Products.sort((a, b) => {
      return b.rating - a.rating;
    });
  }

 categoryShoes(){
    return this.Products.filter((a) => {
      return a.category == 'shoes';
    });
 }

}