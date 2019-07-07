import {cartService} from './cartService';
import {Component, Input} from '@angular/core';
import {product} from '../product';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({selector: 'shopping-cart-item', templateUrl: './shopping-cart-item.html'})

export default class shoppingCartItem {
   currentRate = 8;
    @Input()product : product;
    constructor(private _cartService : cartService) {}
    AddProduct(_product : product) {
        _product.added = true;
        this
            ._cartService
            .addProduct(_product);
    }
    RemoveProduct(_product : product) {
        _product.added = false;
        this
            ._cartService
            .removeProduct(_product.id);
    }

}