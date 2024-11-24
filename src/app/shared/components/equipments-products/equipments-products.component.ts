import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { EQUIPMENTS_PRODUCTS } from '../../consts/equipments-products.const';

@Component({
  selector: 'app-equipments-products',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './equipments-products.component.html',
  styleUrl: './equipments-products.component.css'
})
export class EquipmentsProductsComponent {
  equipments = EQUIPMENTS_PRODUCTS;
}
