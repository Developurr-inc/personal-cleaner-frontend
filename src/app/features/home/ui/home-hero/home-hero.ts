import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css'
})
export class HomeHero { }
