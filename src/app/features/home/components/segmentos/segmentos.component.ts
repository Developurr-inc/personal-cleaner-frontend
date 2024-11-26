import { Component } from '@angular/core';
// import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { CtaComponent } from '../cta/cta.component';
import { SEGMENTS } from '../../../../core/consts/segments.const';

@Component({
  selector: 'app-segmentos',
  standalone: true,
  imports: [
    // BadgeComponent,
    CtaComponent
  ],
  templateUrl: './segmentos.component.html',
  styleUrl: './segmentos.component.css',
})
export class SegmentosComponent {
  segments = SEGMENTS;
}
