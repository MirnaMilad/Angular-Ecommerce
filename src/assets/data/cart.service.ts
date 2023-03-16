import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  
  products:Product[]=[];

  addToCart(item:Product){
    this.products.push(item);
    this.products.slice();
  }

}