import { Component } from '@angular/core';

import { EquipmentContentComponent } from '../../shared/components/equipment-page-content/equipment-content.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';

@Component({
  selector: 'app-equipments',
  standalone: true,
  imports: [EquipmentContentComponent, StatsComponent],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css',
})
export class EquipmentsComponent {}
