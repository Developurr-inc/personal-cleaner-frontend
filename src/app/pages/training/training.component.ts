import { Component } from '@angular/core';
import { ContentComponent } from '../../shared/components/content/content.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [ContentComponent, StatsComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css',
})
export class TrainingComponent {}
