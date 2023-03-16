import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/assets/data/cart.service';
import { ProductsService } from 'src/assets/data/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productId:number;
  product : Product;
  title:string;
  constructor(private activatedRoute:ActivatedRoute,
    private productsService : ProductsService,
    private cart : CartService){
  }
  ngOnInit(){
    this.productId = this.activatedRoute.snapshot.params.id;
    this.product = this.productsService.products.find(item=>item.id)
    this.title = this.product.productName
    console.log(this.product)
  }

  addToCart(product:Product){
    this.cart.addToCart(product)
    console.log("cart from product details" , this.cart.products)
  }
  
}
