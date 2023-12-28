import { Component } from '@angular/core';

import { ContentComponent } from '../../shared/components/content/content.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';

@Component({
  selector: 'app-technical-assistance',
  standalone: true,
  imports: [ContentComponent, StatsComponent],
  templateUrl: './technical-assistance.component.html',
  styleUrl: './technical-assistance.component.css',
})
export class TechnicalAssistanceComponent {}
