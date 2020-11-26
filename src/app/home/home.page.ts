import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

}
