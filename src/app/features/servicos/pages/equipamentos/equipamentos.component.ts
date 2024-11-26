import { Component } from '@angular/core';

import { EquipmentContentComponent } from '../../components/equipment-page-content/equipment-content.component';
import { StatsComponent } from '../../components/stats/stats.component';

@Component({
  selector: 'app-equipamentos',
  standalone: true,
  imports: [EquipmentContentComponent, StatsComponent],
  templateUrl: './equipamentos.component.html',
  styleUrl: './equipamentos.component.css',
})
export class EquipamentosComponent { }
