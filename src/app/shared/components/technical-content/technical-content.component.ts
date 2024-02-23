import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-technical-content',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './technical-content.component.html',
  styleUrl: './technical-content.component.css',
})
export class TechnicalContentComponent {}
