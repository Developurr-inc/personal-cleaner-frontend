import { Component } from '@angular/core';

import { ServiceChemicalsComponent } from "../../ui/service-chemicals/service-chemicals.component";
import { ServiceListProductsComponent } from "../../ui/service-list-products/service-list-products.component";

import { PAPERS_PRODUCTS } from '../../../../core/consts/paper-products.const';
import { DISPENSERS_PRODUCTS } from '../../../../core/consts/dispensers-products.const';
import { DISPENSERS_PRODUCTS_SECOND } from '../../../../core/consts/dispensers-products-second.const';
import { DISPENSERS_PRODUCTS_THIRD } from '../../../../core/consts/dispensers-products-third.const';
import { ACCESSORIES_PRODUCTS } from '../../../../core/consts/accessories-products.const';
import { ACCESSORIES_SECOND_PRODUCTS } from '../../../../core/consts/accessories-second-products.conts';
import { ACCESSORIES_THIRD_PRODUCTS } from '../../../../core/consts/accessories-third-products.const';
import { EQUIPMENTS_PRODUCTS } from '../../../../core/consts/equipments-products.const';
import { ServiceButtonComponent } from "../../ui/service-button/service-button.component";

@Component({
  selector: 'app-products',
  imports: [ServiceListProductsComponent, ServiceChemicalsComponent, ServiceButtonComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  papers = PAPERS_PRODUCTS;
  dispensers = DISPENSERS_PRODUCTS;
  dispensersSecond = DISPENSERS_PRODUCTS_SECOND;
  dispensersThird = DISPENSERS_PRODUCTS_THIRD;
  accessories = ACCESSORIES_PRODUCTS;
  accessoriesSecond = ACCESSORIES_SECOND_PRODUCTS;
  accessoriesThird = ACCESSORIES_THIRD_PRODUCTS;
  equipments = EQUIPMENTS_PRODUCTS;

  categories = [
    { id: 1, name: 'chemicals', text: 'Químicos', state: true },
    { id: 2, name: 'papers', text: 'Papéis', state: false },
    { id: 3, name: 'dispensers', text: 'Dispensers', state: false },
    { id: 4, name: 'accessories', text: 'Acessórios', state: false },
    { id: 5, name: 'equipments', text: 'Equipamentos', state: false },
  ];

  selectedCategory: string = this.categories.filter(category => category.state)[0].name;

  toggleCategory(id: number) {
    this.categories.forEach(category => {
      category.state = category.id === id;
    });

    this.selectedCategory = this.categories.filter(category => category.state)[0].name;
  }
}
