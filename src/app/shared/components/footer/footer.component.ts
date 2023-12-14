import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MAIN_ROUTES } from '../../consts/main-routes.const';
import { SOCIAL_MEDIA_LINKS } from '../../consts/social-media-links.const';
import { HELP_ROUTES } from '../../consts/help-routes.const';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  mainRoutes = MAIN_ROUTES;
  helpRoutes = HELP_ROUTES;
  socialMedias = SOCIAL_MEDIA_LINKS;

  year = new Date().getFullYear();
}
