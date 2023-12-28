import { Component } from '@angular/core';
import { ContentComponent } from '../../shared/components/content/content.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';

@Component({
  selector: 'app-equipments',
  standalone: true,
  imports: [ContentComponent, StatsComponent],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css'
})
export class EquipmentsComponent {

}
