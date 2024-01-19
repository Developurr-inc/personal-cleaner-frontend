import { Component } from '@angular/core';

import { StatsComponent } from '../../shared/components/stats/stats.component';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-technical-assistance',
  standalone: true,
  imports: [ StatsComponent, NavigationComponent, FooterComponent],
  templateUrl: './technical-assistance.component.html',
  styleUrl: './technical-assistance.component.css',
})
export class TechnicalAssistanceComponent {}
