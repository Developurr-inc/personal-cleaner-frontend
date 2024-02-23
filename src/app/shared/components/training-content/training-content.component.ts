import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-training-content',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './training-content.component.html',
  styleUrl: './training-content.component.css',
})
export class TrainingContentComponent {}
