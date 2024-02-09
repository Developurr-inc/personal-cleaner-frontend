import { Component } from '@angular/core';
import {
  CommonModule,
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {  } from '@angular/core'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    RouterLink,
    RouterOutlet,
    NavigationComponent,
    FooterComponent,
    NgOptimizedImage,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        let url = 'https://www.personal-cleaner.com';

        if (!config.src.endsWith('.webp')) {
          return url + config.src;
        }

        let image = config.src.split('.webp')[0];

        if (config.width) {
          image += `-${config.width}px`;
        }

        return url + image + '.webp';
      },
    },
  ],
})
export class AppComponent {}
