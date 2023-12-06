import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  providers: [
    provideImgixLoader('http://localhost:4200/assets'),
  ]
})
export class NavigationComponent {
  routes = [
    {
      id: 1,
      name: 'Home',
      path: '/',
      active: false
    },
    {
      id: 2,
      name: 'Sobre Nós',
      path: '/about-us',
      active: false
    },
    {
      id: 3,
      name: 'Contato',
      path: '/contact-us',
      active: false
    },
    {
      id: 4,
      name: 'Agendamento',
      path: '/schedule-your-appointment',
      active: false
    }
  ];
  menuOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      this.routes.forEach(route => {
        route.active = this.router.url === route.path;
      });
      this.menuOpen = false;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
