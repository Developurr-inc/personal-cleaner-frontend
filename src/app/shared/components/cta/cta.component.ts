import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css',
})
export class CtaComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) content!: string;
  @Input({ required: true }) image: string = 'image';
  @Input() subtitle: string | null = null;
  @Input() color: string = 'text-indigo-600';
}
