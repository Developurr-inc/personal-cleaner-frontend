import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideImgixLoader } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [
    provideImgixLoader('http://localhost:4200/assets'),
  ]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
