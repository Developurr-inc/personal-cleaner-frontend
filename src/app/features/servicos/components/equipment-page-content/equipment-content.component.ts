import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-equipment-page-content',
  standalone: true,
  imports: [ NgOptimizedImage, CommonModule ],
  templateUrl: './equipment-content.component.html',
  styleUrl: './equipment-content.component.css',
})
export class EquipmentContentComponent {}
