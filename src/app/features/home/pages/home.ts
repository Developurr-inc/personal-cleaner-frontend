import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HomeSegments } from '../ui/home-segments/home-segments';
import { HomeHero } from '../ui/home-hero/home-hero';
import { HomeBlogSections } from '../ui/home-blog-sections/home-blog-sections';
import { HomeStats } from '../ui/home-stats/home-stats';

import { SERVICES } from '../../../core/consts/services.const';
import { SEGMENTS } from '../../../core/consts/segments.const';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HomeSegments,
    HomeHero,
    HomeBlogSections,
    HomeStats
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  services = SERVICES;
  segments = SEGMENTS;
}
