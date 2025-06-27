import { Component, Input } from '@angular/core';

import { ProductModel } from '../../../../core/domain/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-list-products',
  imports: [CommonModule],
  templateUrl: './service-list-products.html',
  styleUrl: './service-list-products.css'
})
export class ServiceListProducts {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) products: ProductModel[] = [];
}
