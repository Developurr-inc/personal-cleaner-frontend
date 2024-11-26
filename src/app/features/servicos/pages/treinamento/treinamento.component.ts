import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TrainingContentComponent } from '../../components/training-content/training-content.component';
import { StatsComponent } from '../../components/stats/stats.component';

@Component({
  selector: 'app-Treinamento',
  standalone: true,
  imports: [TrainingContentComponent, StatsComponent, CommonModule],
  templateUrl: './treinamento.component.html',
  styleUrl: './treinamento.component.css',
})
export class TreinamentoComponent { }
