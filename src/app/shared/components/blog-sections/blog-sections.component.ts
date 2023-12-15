import { Component } from '@angular/core';
import { SERVICES } from '../../consts/services.const';

@Component({
  selector: 'app-blog-sections',
  standalone: true,
  imports: [],
  templateUrl: './blog-sections.component.html',
  styleUrl: './blog-sections.component.css',
})
export class BlogSectionsComponent {
  services = SERVICES;
}
