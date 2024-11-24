import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TrainingContentComponent } from '../../../../shared/components/training-content/training-content.component';
import { StatsComponent } from '../../../../shared/components/stats/stats.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [TrainingContentComponent, StatsComponent, CommonModule, NgOptimizedImage],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css',
})
export class TrainingComponent { }
