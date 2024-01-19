import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSectionsComponent } from '../../shared/components/blog-sections/blog-sections.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { SegmentComponent } from '../../shared/components/segment/segment.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SegmentComponent,
    HeroComponent,
    BlogSectionsComponent,
    NotfoundComponent,
    NavigationComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
