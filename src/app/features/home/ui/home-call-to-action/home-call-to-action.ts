import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-call-to-action',
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './home-call-to-action.html',
  styleUrl: './home-call-to-action.css'
})
export class HomeCallToAction {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) content: string = '';
  @Input({ required: true }) image: string = 'image';
  @Input() color: string = 'text-indigo-600';
}
