import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-stats-item',
  imports: [],
  templateUrl: './home-stats-item.html',
  styleUrl: './home-stats-item.css'
})
export class HomeStatsItem {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) value: number = NaN;
}
