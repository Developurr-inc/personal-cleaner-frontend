import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ServiceModel } from '../../../../core/domain/service.model';

@Component({
  selector: 'app-home-blog-sections',
  imports: [NgOptimizedImage],
  templateUrl: './home-blog-sections.component.html',
  styleUrl: './home-blog-sections.component.css'
})
export class HomeBlogSectionsComponent {
  @Input({ required: true }) services: ServiceModel[] = [];
}
