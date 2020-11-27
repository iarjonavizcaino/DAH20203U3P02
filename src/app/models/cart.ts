import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';
import { Product } from './product';

export class Cart {
    products: Product[];
    subtotal: number;
    iva: number;
    total: number;
    date: Date;
}
