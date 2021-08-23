import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FlipkartService } from 'src/app/services/flipkart.service';
import { Product } from 'src/model/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItems: number = 0;

  products: Product[] = [];
  public searchTerm: string = "";


  constructor(private cartService: CartService,
    private flipkartService: FlipkartService) { }

  ngOnInit(): void {

    this.flipkartService.getProductListService()
        .subscribe( res => this.products = res);


    this.cartService.getProducts()
        .subscribe( data => {
            this.totalItems = data.length;
        })
  }

  public search(event: any){
      this.searchTerm = (event.target as HTMLInputElement).value; 
      console.log(this.searchTerm);
      this.cartService.search.next(this.searchTerm);
  }


}
