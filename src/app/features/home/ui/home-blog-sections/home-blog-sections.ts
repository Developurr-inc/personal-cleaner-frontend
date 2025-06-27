import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ServiceModel } from '../../../../core/domain/service.model';

@Component({
  selector: 'app-home-blog-sections',
  imports: [NgOptimizedImage],
  templateUrl: './home-blog-sections.html',
  styleUrl: './home-blog-sections.css'
})
export class HomeBlogSections {
  @Input({ required: true }) services: ServiceModel[] = [];
}
