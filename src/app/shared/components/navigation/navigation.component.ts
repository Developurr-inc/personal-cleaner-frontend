import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { RouteModel } from '../../models/route.model';
import { RouteUrlEnum } from '../../enums/route-url.enum';
import { MAIN_ROUTES } from '../../consts/main-routes.const';
import { RouteNameEnum } from '../../enums/route-name.enum';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  protected readonly RouteUrlEnum = RouteUrlEnum;
  protected readonly RouteNameEnum = RouteNameEnum;

  routes: RouteModel[] = MAIN_ROUTES;
  menuOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.routes.forEach((route) => {
        route.active = this.router.url === `/${route.path}`;
      });
      this.menuOpen = false;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
