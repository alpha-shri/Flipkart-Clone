import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FlipkartService } from 'src/app/services/flipkart.service';
import { Product } from 'src/model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: Product[] = [];

  searchKey:string = '';

  constructor(private service: FlipkartService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.service.getProductListService()
        .subscribe(data => {
          this.productList = data;
          console.table(this.productList);

          this.productList.forEach( element => {
              Object.assign(element, {
                quantity: 1,
                total: element.price
              })
          });

        });

    this.cartService.search
        .subscribe( (val: string) => {
          
          this.searchKey = val;
          console.log(this.searchKey);
          
        });

  }

  public addToCart(product: Product){

      console.log("Inside addToCart: "+ product);
      
      this.cartService.addToCart(product);
  }

}
