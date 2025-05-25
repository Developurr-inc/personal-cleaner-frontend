import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HELP_ROUTES } from '../../../core/consts/help-routes.const';
import { MAIN_ROUTES } from '../../../core/consts/main-routes.const';
import { SOCIAL_MEDIA_LINKS } from '../../../core/consts/social-media-links.const';
import { SERVICES } from '../../../core/consts/services.const';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  mainRoutes = MAIN_ROUTES;
  helpRoutes = HELP_ROUTES;
  serviceRoutes = SERVICES;
  socialMedias = SOCIAL_MEDIA_LINKS;

  year = new Date().getFullYear();
  cnpj = "54.874.695/0001-60";
}
