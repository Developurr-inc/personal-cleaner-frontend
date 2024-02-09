import { Component } from '@angular/core';

import { TechnicalContentComponent } from '../../shared/components/technical-content/technical-content.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';

@Component({
  selector: 'app-technical-assistance',
  standalone: true,
  imports: [TechnicalContentComponent, StatsComponent],
  templateUrl: './technical-assistance.component.html',
  styleUrl: './technical-assistance.component.css',
})
export class TechnicalAssistanceComponent {}
