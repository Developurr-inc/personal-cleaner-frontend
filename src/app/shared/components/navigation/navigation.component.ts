import { Component } from '@angular/core';
import {
  CommonModule,
  NgOptimizedImage,
  provideImgixLoader,
} from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { RouteModel } from '../../models/route.model';
import { RouteUrlEnum } from '../../enums/route-url.enum';
import { RouteNameEnum } from '../../enums/route-name.enum';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  providers: [provideImgixLoader('http://localhost:4200/assets')],
})
export class NavigationComponent {
  routes: RouteModel[] = [
    {
      id: undefined,
      name: RouteNameEnum.HOME,
      path: RouteUrlEnum.HOME,
      active: false,
    },
    {
      id: undefined,
      name: RouteNameEnum.ABOUT_US,
      path: RouteUrlEnum.ABOUT_US,
      active: false,
    },
    {
      id: undefined,
      name: RouteNameEnum.CONTACT_US,
      path: RouteUrlEnum.CONTACT_US,
      active: false,
    },
    {
      id: undefined,
      name: RouteNameEnum.APPOINTMENT,
      path: RouteUrlEnum.APPOINTMENT,
      active: false,
    },
  ];
  
  homeRoute: string = RouteUrlEnum.HOME;
  menuOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      this.routes.forEach((route, index) => {
        route.id = index;
        route.active = this.router.url === `/${route.path}`;
      });
      this.menuOpen = false;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
