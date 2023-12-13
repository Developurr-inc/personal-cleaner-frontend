import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CtaComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
