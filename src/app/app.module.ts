import {FormsModule} from '@angular/forms';
import LoaderComponent from './loader/loader-component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import HeaderComponent from './header/app-header';
import FooterComponent from './footer/app-footer';
import {LoaderService} from './loader/loader-service';
import {HttpClient} from './http.service';
import shoppingCart from './cart/shopping-cart';
//import {LocalStorageService} from './local.storage.service';
import {HttpModule} from '@angular/http';
import shoppingCartItem from './cart/shopping-cart-item';
import shoppingList from './cart/shopping-list';
import {cartService} from './cart/cartService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BiComponent } from './Bi/bi/bi.component';
import { CartAppComponent } from './cart/cart-app/cart-app.component';
import{Routes,RouterModule} from '@angular/router';

const appRoutes:Routes=[
{path:'',component:CartAppComponent},
    {path:'bi',component:BiComponent},
]
@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpModule, NgbModule,RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoaderComponent,
        shoppingCart,
        shoppingCartItem,
        shoppingList,
        BiComponent,
        CartAppComponent
    ],
    providers: [
        LoaderService, HttpClient, cartService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}