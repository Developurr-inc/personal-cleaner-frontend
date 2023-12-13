import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RouteUrlEnum } from '../../enums/route-url.enum';
import { RouteNameEnum } from '../../enums/route-name.enum';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  routes = [
    {
      id: 1,
      name: RouteNameEnum.HOME,
      path: RouteUrlEnum.HOME,
    },
    {
      id: 2,
      name: RouteNameEnum.ABOUT_US,
      path: RouteUrlEnum.ABOUT_US,
    },
    {
      id: 3,
      name: RouteNameEnum.MESSAGE,
      path: RouteUrlEnum.MESSAGE,
    },
  ];

  socialMedias = [
    {
      id: 1,
      color: '#206597',
      link: 'https://www.linkedin.com/in/claudio-vilela-aguiar',
      icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
    },
  ];

  year = new Date().getFullYear();
}
