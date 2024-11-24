import { Component } from '@angular/core';
import { SUPPORT_PRODUCTS } from '../../../core/consts/support-products.const';

@Component({
  selector: 'app-support-products',
  standalone: true,
  imports: [],
  templateUrl: './support-products.component.html',
  styleUrl: './support-products.component.css',
})
export class SupportProductsComponent {
  supports = SUPPORT_PRODUCTS;
}
