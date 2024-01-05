import { Component } from '@angular/core';
import { PapersProductsComponent } from '../../shared/components/papers-products/papers-products.component';
import { SupportProductsComponent } from '../../shared/components/support-products/support-products.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    PapersProductsComponent,
    SupportProductsComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
