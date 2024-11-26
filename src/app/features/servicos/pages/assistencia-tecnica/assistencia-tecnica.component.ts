import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TechnicalContentComponent } from '../../components/technical-content/technical-content.component';
import { StatsComponent } from '../../components/stats/stats.component';

@Component({
  selector: 'app-assistencia-tecnica',
  standalone: true,
  imports: [
    TechnicalContentComponent,
    StatsComponent,
    CommonModule,
    // NgOptimizedImage
  ],
  templateUrl: './assistencia-tecnica.component.html',
  styleUrl: './assistencia-tecnica.component.css',
})
export class AssistenciaTecnicaComponent { }
