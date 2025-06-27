import { Component, Input } from '@angular/core';

import { HomeCallToAction } from '../home-call-to-action/home-call-to-action';
import { SegmentModel } from '../../../../core/domain/segment.model';

@Component({
  selector: 'app-home-segments',
  imports: [HomeCallToAction],
  templateUrl: './home-segments.html',
  styleUrl: './home-segments.css'
})
export class HomeSegments {
  @Input({ required: true }) segments: SegmentModel[] = [];
}
