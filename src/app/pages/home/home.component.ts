import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentComponent } from '../../shared/components/segment/segment.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SegmentComponent, BadgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
