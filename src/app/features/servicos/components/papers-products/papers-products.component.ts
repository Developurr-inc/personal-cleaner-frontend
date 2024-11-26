import { Component } from '@angular/core';
import { PAPERS_PRODUCTS } from '../../../../core/consts/paper-products.const';

@Component({
  selector: 'app-papers-products',
  standalone: true,
  imports: [],
  templateUrl: './papers-products.component.html',
  styleUrl: './papers-products.component.css',
})
export class PapersProductsComponent {
  papers = PAPERS_PRODUCTS;
}
