import { Component } from '@angular/core';
import { StatsComponent } from '../../shared/components/stats/stats.component';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-equipments',
  standalone: true,
  imports: [ StatsComponent, NavigationComponent,
    FooterComponent],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css',
})
export class EquipmentsComponent {}
