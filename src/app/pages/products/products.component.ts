import { Component } from '@angular/core';
import { PapersProductsComponent } from '../../shared/components/papers-products/papers-products.component';
import { SupportProductsComponent } from '../../shared/components/support-products/support-products.component';
import { ChemicalsComponent } from '../../shared/components/chemicals/chemicals.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    PapersProductsComponent,
    SupportProductsComponent,
    ChemicalsComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  toggle(event:any) {
    const btns = document.getElementsByClassName("btn")
    let target = event.target || event.currentTarget || event.nodeValue;
    let idAttr = target.attributes.id;
    let selected = idAttr.nodeValue

    const btnProducts = document.getElementById('btn-products');
    const btnChemicals = document.getElementById('btn-chemicals');

    let productsId = document.getElementById("btn-products")?.id
    let chemicalsId = document.getElementById("btn-chemicals")?.id

    let productsContent = document.getElementById("products-content")
    let chemicalsContent = document.getElementById("chemicals-content")

    // console.log(idAttr)
    // console.log(productsId)
    console.log(selected)
    // console.log(chemicalsId)

    if (selected == productsId) {
      chemicalsContent?.classList.add('hidden')
      btnProducts?.classList.add('bg-indigo-600');
      btnProducts?.classList.add('text-neutral-50');
      btnChemicals?.classList.remove('bg-indigo-600');
      btnChemicals?.classList.remove('text-neutral-50');
      console.log(productsContent?.classList.contains('hidden'))
      console.log("Olá")
    } else if (selected == chemicalsId) {
      chemicalsContent?.classList.remove('hidden')
      productsContent?.classList.add('hidden')
      btnProducts?.classList.remove('bg-indigo-600');
      btnProducts?.classList.remove('text-neutral-50');
      btnChemicals?.classList.add('bg-indigo-600');
      btnChemicals?.classList.add('text-neutral-50');
      console.log(chemicalsContent?.classList.contains('hidden'))
      console.log("Olá 2")
    }
  }

//   apperComponent(e.target): void {
//     const buttonId = (e.target as HTMLElement).id;
//     console.log('ID do botão clicado:', buttonId);
//   ;
// }
  // apperComponent() {
  //   //Essa função altera as cores dos buttons e seus textos também além disso já está otimizada para o tema claro também
  //   const productContent: HTMLElement | null =
  //     document.getElementById('products-content');
  //   const chemicalsContent: HTMLElement | null =
  //     document.getElementById('chemicals-content');
  //   const btnProducts = document.getElementById('btn-products');
  //   const btnChemicals = document.getElementById('btn-chemicals');
  //   let clicked: any = document.getElementsByClassName("btn");
  //   let clickedStatus: any = clicked.attributes[0].value


    // console.log(clickedStatus)
    // if (productContent?.classList.contains('hidden')) {
    //   productContent?.classList.remove('hidden');
    //   chemicalsContent?.classList.add('hidden');
    //   btnProducts?.classList.add('bg-indigo-600');
    //   btnProducts?.classList.add('text-neutral-50');
    //   btnChemicals?.classList.remove('bg-indigo-600');
    //   btnChemicals?.classList.remove('text-neutral-50');

    // } else {
    //   productContent?.classList.add('hidden');
    //   chemicalsContent?.classList.remove('hidden');
    //   btnProducts?.classList.remove('bg-indigo-600');
    //   btnProducts?.classList.remove('text-neutral-50');
    //   btnChemicals?.classList.add('bg-indigo-600');
    //   btnChemicals?.classList.add('text-neutral-50');
    // }
  //   console.log(this.apperComponent())
  // }
}
