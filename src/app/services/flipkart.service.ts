import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/model/Product';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private http: HttpClient) { }

  private url = 'https://fakestoreapi.com/products';

  getProductListService(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
