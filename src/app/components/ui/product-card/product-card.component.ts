import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/assets/data/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() item: Product
  constructor(private cart : CartService){
  }

  addToCart(item:Product){
    this.cart.addToCart(item)
    console.log(this.cart.products)
  }
}
