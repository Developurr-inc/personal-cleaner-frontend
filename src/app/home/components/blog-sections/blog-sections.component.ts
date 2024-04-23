import { Component } from '@angular/core';
import { SERVICES } from '../../../core/consts/services.const';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-blog-sections',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './blog-sections.component.html',
  styleUrl: './blog-sections.component.css',
})
export class BlogSectionsComponent {
  services = SERVICES;
}
