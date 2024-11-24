import { Component } from '@angular/core';
import { PapersProductsComponent } from '../../../../shared/components/papers-products/papers-products.component';
import { SupportProductsComponent } from '../../../../shared/components/support-products/support-products.component';
import { ChemicalsComponent } from '../../../../shared/components/chemicals/chemicals.component';
import { DispensersProductsComponent } from '../../shared/components/dispensers-products/dispensers-products.component';
import { AccessoriesProductsComponent } from '../../shared/components/accessories-products/accessories-products.component';
import { EquipmentsProductsComponent } from '../../shared/components/equipments-products/equipments-products.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    PapersProductsComponent,
    // SupportProductsComponent,
    ChemicalsComponent,
    DispensersProductsComponent,
    AccessoriesProductsComponent,
    EquipmentsProductsComponent,
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {
  toggle(event:any) {

    let target = event.target || event.currentTarget || event.nodeValue;
    let idAttr = target.attributes.id;
    let selected = idAttr.nodeValue
    console.log(idAttr)
    console.log(idAttr.nodeValue)

    //Constanes dos botões
    const btnProducts = document.getElementById('btn-products');
    const btnChemicals = document.getElementById('btn-chemicals');
    const btnDispensers = document.getElementById('btn-dispensers');
    const btnAccessories = document.getElementById('btn-accessories');
    const btnEquipments = document.getElementById('btn-equipments');

    //Constantes para comparar elemento selecionado com o id dos botões
    const productsId = document.getElementById("btn-products")?.id;
    const chemicalsId = document.getElementById("btn-chemicals")?.id;
    const dispensersId = document.getElementById("btn-dispensers")?.id;
    const accessoriesId = document.getElementById("btn-accessories")?.id;
    const equipmentsId = document.getElementById("btn-equipments")?.id;

    //Constantes para acionar ou esconder o conteúdo
    const productsContent = document.getElementById("products-content");
    const chemicalsContent = document.getElementById("chemicals-content");
    const dispensersContent = document.getElementById("dispensers-content");
    const accessoriesContent = document.getElementById("accessories-content");
    const equipmentsContent = document.getElementById("equipments-content");

    if (selected == productsId) {
      //conteúdo
      productsContent?.classList.remove('hidden');
      chemicalsContent?.classList.add('hidden');
      dispensersContent?.classList.add('hidden');
      accessoriesContent?.classList.add('hidden');
      equipmentsContent?.classList.add('hidden');
      //estilo button
      btnProducts?.classList.add('valid');
      btnChemicals?.classList.remove('valid');
      btnDispensers?.classList.remove('valid');
      btnAccessories?.classList.remove('valid');
      btnEquipments?.classList.remove('valid');

    } else if (selected == chemicalsId) {

      productsContent?.classList.add('hidden');
      chemicalsContent?.classList.remove('hidden');
      dispensersContent?.classList.add('hidden');
      accessoriesContent?.classList.add('hidden');
      equipmentsContent?.classList.add('hidden');

      btnProducts?.classList.remove('valid');
      btnDispensers?.classList.remove('valid');
      btnChemicals?.classList.add('valid');
      btnAccessories?.classList.remove('valid');
      btnEquipments?.classList.remove('valid');

    } else if (selected == dispensersId) {

      productsContent?.classList.add('hidden');
      chemicalsContent?.classList.add('hidden');
      dispensersContent?.classList.remove('hidden');
      accessoriesContent?.classList.add('hidden');
      equipmentsContent?.classList.add('hidden');

      btnProducts?.classList.remove('valid');
      btnChemicals?.classList.remove('valid');
      btnDispensers?.classList.add('valid');
      btnAccessories?.classList.remove('valid');
      btnEquipments?.classList.remove('valid');

    } else if (selected == accessoriesId) {

      productsContent?.classList.add('hidden');
      chemicalsContent?.classList.add('hidden');
      dispensersContent?.classList.add('hidden');
      accessoriesContent?.classList.remove('hidden');
      equipmentsContent?.classList.add('hidden');

      btnProducts?.classList.remove('valid');
      btnChemicals?.classList.remove('valid');
      btnDispensers?.classList.remove('valid');
      btnAccessories?.classList.add('valid');
      btnEquipments?.classList.remove('valid');

    } else {

      productsContent?.classList.add('hidden');
      chemicalsContent?.classList.add('hidden');
      dispensersContent?.classList.add('hidden');
      accessoriesContent?.classList.add('hidden');
      equipmentsContent?.classList.remove('hidden');

      btnProducts?.classList.remove('valid');
      btnChemicals?.classList.remove('valid');
      btnDispensers?.classList.remove('valid');
      btnAccessories?.classList.remove('valid');
      btnEquipments?.classList.add('valid');

    }

  }
}
