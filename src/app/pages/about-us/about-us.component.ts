import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {

}
