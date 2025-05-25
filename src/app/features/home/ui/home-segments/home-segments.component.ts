import { Component, Input } from '@angular/core';

import { HomeCallToActionComponent } from '../home-call-to-action/home-call-to-action.component';
import { SegmentModel } from '../../../../core/domain/segment.model';

@Component({
  selector: 'app-home-segments',
  imports: [HomeCallToActionComponent],
  templateUrl: './home-segments.component.html',
  styleUrl: './home-segments.component.css'
})
export class HomeSegmentsComponent {
  @Input({ required: true }) segments: SegmentModel[] = [];
}
