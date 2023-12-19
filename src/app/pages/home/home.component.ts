import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSectionsComponent } from '../../shared/components/blog-sections/blog-sections.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { SegmentComponent } from '../../shared/components/segment/segment.component';
import { ContentComponent } from '../../shared/components/content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SegmentComponent,
    HeroComponent,
    BlogSectionsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
