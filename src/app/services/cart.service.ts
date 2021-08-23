import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];

  // We can Emit data
  // we can fetch(subscribe) to it.
  public productList = new BehaviorSubject<any>([]);

  //Send data across HeadComponent to Component
  public search = new BehaviorSubject<string>("");

  constructor() {
    console.log("Inside CartService");
  }

  // Getter
  getProducts() {
    return this.productList.asObservable();
  } 

  // Setter
  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    console.log("Inside addToCart ");

    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);

    this.getTotalPrice();

    console.log(this.cartItemList);

  }

  getTotalPrice(): number {
    let grandTotal = 0;

    this.cartItemList.map((data: any) => {
      grandTotal += data.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((data: any, index: any) => {
      if (product.id === data.id) {
        this.cartItemList.splice(index, 1);
      }
    });

    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);


  }

}
