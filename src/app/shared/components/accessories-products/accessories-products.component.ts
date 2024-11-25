import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ACCESSORIES_PRODUCTS } from '../../../core/consts/accessories-products.const';
import { ACCESSORIES_SECOND_PRODUCTS } from '../../../core/consts/accessories-second-products.conts';
import { ACCESSORIES_THIRD_PRODUCTS } from '../../../core/consts/accessories-third-products.const';

@Component({
  selector: 'app-accessories-products',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage, ],
  templateUrl: './accessories-products.component.html',
  styleUrl: './accessories-products.component.css'
})
export class AccessoriesProductsComponent {
  accessories = ACCESSORIES_PRODUCTS;
  accessoriesSecond = ACCESSORIES_SECOND_PRODUCTS;
  accessoriesThird = ACCESSORIES_THIRD_PRODUCTS;
}
