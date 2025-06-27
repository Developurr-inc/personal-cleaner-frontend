import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { MAIN_ROUTES } from '../../../core/consts/main-routes.const';
import { RouteModel } from '../../../core/domain/route.model';
import { RouteNameEnum } from '../../../core/enums/route-name.enum';
import { RouteUrlEnum } from '../../../core/enums/route-url.enum';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
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
