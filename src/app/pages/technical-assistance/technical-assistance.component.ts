import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TechnicalContentComponent } from '../../shared/components/technical-content/technical-content.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';

@Component({
  selector: 'app-technical-assistance',
  standalone: true,
  imports: [TechnicalContentComponent, StatsComponent, CommonModule, NgOptimizedImage],
  templateUrl: './technical-assistance.component.html',
  styleUrl: './technical-assistance.component.css',
})
export class TechnicalAssistanceComponent {}
