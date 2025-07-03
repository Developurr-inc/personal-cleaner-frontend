import { Component, Input } from '@angular/core';

import { StatModel } from '../../../../core/domain/stat.model';
import { HomeStatsItem } from "../home-stats-item/home-stats-item";

@Component({
  selector: 'app-home-stats',
  imports: [HomeStatsItem],
  templateUrl: './home-stats.html',
  styleUrl: './home-stats.css'
})
export class HomeStats {
  @Input({ required: true }) stats: StatModel[] = [];
}
