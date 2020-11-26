import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {
    this.products.push({
      name: 'Mouse',
      photo: 'https://picsum.photos/200/300',
      description: 'Mouse gamer',
      price: 100.50
    });

    this.products.push({
      name: 'Carro',
      photo: 'https://picsum.photos/200/300',
      description: 'Mouse gamer',
      price: 100.50
    });

    this.products.push({
      name: 'Perro',
      photo: 'https://picsum.photos/200/300',
      description: 'Mouse gamer',
      price: 100.50
    });
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
