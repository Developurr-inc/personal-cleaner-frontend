import { Component } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { CtaComponent } from '../cta/cta.component';
import { SEGMENTS } from '../../../core/consts/segments.const';

@Component({
  selector: 'app-segment',
  standalone: true,
  imports: [BadgeComponent, CtaComponent],
  templateUrl: './segment.component.html',
  styleUrl: './segment.component.css',
})
export class SegmentComponent {
  segments = SEGMENTS;
}
