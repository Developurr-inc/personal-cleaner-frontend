import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-chemicals',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage],
  templateUrl: './chemicals.component.html',
  styleUrl: './chemicals.component.css',
})
export class ChemicalsComponent {}
