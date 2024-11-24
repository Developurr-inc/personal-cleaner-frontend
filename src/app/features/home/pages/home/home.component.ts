import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSectionsComponent } from '../../components/blog-sections/blog-sections.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SegmentosComponent } from '../../components/segmentos/segmentos.component';
// import { NotfoundComponent } from '../../../../pages/notfound/notfound.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SegmentosComponent,
    HeroComponent,
    BlogSectionsComponent,
    // NotfoundComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent { }
