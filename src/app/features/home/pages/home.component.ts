import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HomeSegmentsComponent } from '../ui/home-segments/home-segments.component';
import { HomeHeroComponent } from '../ui/home-hero/home-hero.component';
import { HomeBlogSectionsComponent } from '../ui/home-blog-sections/home-blog-sections.component';
import { HomeStatsComponent } from '../ui/home-stats/home-stats.component';

import { SERVICES } from '../../../core/consts/services.const';
import { SEGMENTS } from '../../../core/consts/segments.const';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HomeSegmentsComponent,
    HomeHeroComponent,
    HomeBlogSectionsComponent,
    HomeStatsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services = SERVICES;
  segments = SEGMENTS;
}
