import { Component } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { CtaComponent } from '../cta/cta.component';
import { SEGMENTS } from '../../consts/segments.const';

@Component({
  selector: 'app-segment',
  standalone: true,
  imports: [BadgeComponent, CtaComponent],
  templateUrl: './segment.component.html',
  styleUrl: './segment.component.css',
})
export class SegmentComponent {
  segments = SEGMENTS;

  id = -1;
  title = '';
  subtitle = '';
  content = '';
  image = '';
  color = '';

  constructor() {
    this.id = this.segments[0].id;
    this.title = this.segments[0].title;
    this.subtitle = this.segments[0].subtitle;
    this.content = this.segments[0].content;
    this.image = this.segments[0].image;
    this.color = this.segments[0].color;
  }

  switchCtaContent(id: number) {
    this.segments.forEach((segment) => {
      if (segment.id === id) {
        this.id = segment.id;
        this.title = segment.title;
        this.subtitle = segment.subtitle;
        this.content = segment.content;
        this.image = segment.image;
        this.color = segment.color;
      }
    });
  }

  public scrollRight(): void {
    document
      .getElementById('scrolling-container')
      ?.scrollBy({ left: 150, behavior: 'smooth' });
  }

  public scrollLeft(): void {
    document
      .getElementById('scrolling-container')
      ?.scrollBy({ left: -150, behavior: 'smooth' });
  }

  protected readonly Boolean = Boolean;
}
