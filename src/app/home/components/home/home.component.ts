import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSectionsComponent } from '../blog-sections/blog-sections.component';
import { HeroComponent } from '../hero/hero.component';
import { SegmentComponent } from '../segment/segment.component';
import { NotfoundComponent } from '../../../pages/notfound/notfound.component';

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
export class HomeComponent { }
