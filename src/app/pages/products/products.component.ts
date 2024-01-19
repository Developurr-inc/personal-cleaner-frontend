import { Component } from '@angular/core';
import { PapersProductsComponent } from '../../shared/components/papers-products/papers-products.component';
import { SupportProductsComponent } from '../../shared/components/support-products/support-products.component';
import { ChemicalsComponent } from '../../shared/components/chemicals/chemicals.component';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    PapersProductsComponent,
    SupportProductsComponent,
    ChemicalsComponent,
    NavigationComponent,
    FooterComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  apperComponent() {//Essa função altera as cores dos buttons e seus textos também além disso já está otimizada para o tema claro também
    const productContent: HTMLElement | null =
      document.getElementById('products-content');
    const chemicalsContent: HTMLElement | null =
      document.getElementById('chemicals-content');
    const btnProducts = document.getElementById('btn-products');
    const btnChemicals = document.getElementById('btn-chemicals');

    if (productContent?.classList.contains('hidden')) {
      productContent?.classList.remove('hidden');
      chemicalsContent?.classList.add('hidden');
      btnProducts?.classList.add('bg-indigo-600');
      btnProducts?.classList.add('text-neutral-50');
      btnChemicals?.classList.remove('bg-indigo-600');
      btnChemicals?.classList.remove('text-neutral-50');
    } else {
      productContent?.classList.add('hidden');
      chemicalsContent?.classList.remove('hidden');
      btnProducts?.classList.remove('bg-indigo-600');
      btnProducts?.classList.remove('text-neutral-50');
      btnChemicals?.classList.add('bg-indigo-600');
      btnChemicals?.classList.add('text-neutral-50');
    }
  }
}
