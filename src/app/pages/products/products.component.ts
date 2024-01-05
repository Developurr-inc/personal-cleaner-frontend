import { Component } from '@angular/core';
import { PapersProductsComponent } from '../../shared/components/papers-products/papers-products.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    PapersProductsComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
