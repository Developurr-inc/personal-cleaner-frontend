import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { SegmentComponent } from '../../shared/components/segment/segment.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SegmentComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
