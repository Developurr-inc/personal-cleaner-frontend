import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSectionsComponent } from '../../shared/components/blog-sections/blog-sections.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { SegmentComponent } from '../../shared/components/segment/segment.component';
import { NotfoundComponent } from '../notfound/notfound.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SegmentComponent,
    HeroComponent,
    BlogSectionsComponent,
    NotfoundComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
