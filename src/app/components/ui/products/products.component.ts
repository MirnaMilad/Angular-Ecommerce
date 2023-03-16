import { ProductsService } from '../../../../assets/data/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private products : ProductsService){}
  trendingProducts:Product[] = this.products.products.filter((item)=>item.category === 'chair')
  bestSalesProducts :Product[] = this.products.products.filter((item)=>item.category === 'sofa')
  wirelessProducts :Product[] = this.products.products.filter((item)=>item.category === 'smart')
  popularProducts :Product[] = this.products.products.filter((item)=>item.category === 'watch')
  ngOnInit(){
    console.log(typeof(this.trendingProducts));
    console.log(this.trendingProducts);
  }
  
}
