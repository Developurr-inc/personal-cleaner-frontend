import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TrainingContentComponent } from '../../components/training-content/training-content.component';
import { StatsComponent } from '../../components/stats/stats.component';

@Component({
  selector: 'app-Treinamento',
  standalone: true,
  imports: [TrainingContentComponent, StatsComponent, CommonModule],
  templateUrl: './Treinamento.component.html',
  styleUrl: './Treinamento.component.css',
})
export class TreinamentoComponent { }
