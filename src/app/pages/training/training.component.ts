import { Component } from '@angular/core';
import { StatsComponent } from '../../shared/components/stats/stats.component';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [StatsComponent, NavigationComponent, FooterComponent, NavigationComponent, FooterComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css',
})
export class TrainingComponent {}
