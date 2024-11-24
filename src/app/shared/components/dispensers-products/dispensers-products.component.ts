import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DISPENSERS_PRODUCTS } from '../../consts/dispensers-products.const';
import { DISPENSERS_PRODUCTS_SECOND } from '../../consts/dispensers-products-second.const';
import { DISPENSERS_PRODUCTS_THIRD } from '../../consts/dispensers-products-third.const';

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
