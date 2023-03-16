import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/assets/data/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
title : string = "Products";
productData:Product[] = this.productsService.products;
speciesName:string="";

constructor( private productsService : ProductsService){}

handleFilter(category:string){
console.log(category)

  if(category === "sofa"){
    this.productData = this.productsService.products.filter(item=> item.category === "sofa")
    console.log(this.productData)
  }
  if(category === "chair"){
    this.productData = this.productsService.products.filter(item=> item.category === "chair")
    console.log(this.productData)
  }
  if(category === "watch"){
    this.productData = this.productsService.products.filter(item=> item.category === "watch")
    console.log(this.productData)
  }
  if(category === "smart"){
    this.productData = this.productsService.products.filter(item=> item.category === "smart")
    console.log(this.productData)
  }
}

handleSearch(){
this.productData = this.productsService.products.filter(item=> item.productName.toLowerCase().includes(this.speciesName.toLowerCase()))
}
}
