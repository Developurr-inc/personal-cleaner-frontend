import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DISPENSERS_PRODUCTS } from '../../../../core/consts/dispensers-products.const';
import { DISPENSERS_PRODUCTS_SECOND } from '../../../../core/consts/dispensers-products-second.const';
import { DISPENSERS_PRODUCTS_THIRD } from '../../../../core/consts/dispensers-products-third.const';

@Component({
  selector: 'app-dispensers-products',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage ],
  templateUrl: './dispensers-products.component.html',
  styleUrl: './dispensers-products.component.css'
})
export class DispensersProductsComponent {
  dispensers = DISPENSERS_PRODUCTS;
  dispensersSecond = DISPENSERS_PRODUCTS_SECOND;
  dispensersThird = DISPENSERS_PRODUCTS_THIRD;
}
