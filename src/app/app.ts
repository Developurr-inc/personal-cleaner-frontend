import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navigation } from './shared/components/navigation/navigation';
import { Footer } from './shared/components/footer/footer';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        const url = environment.apiUrl;

        if (!config.src.endsWith('.webp')) {
          return `${url}${config.src}`;
        }

        let image = config.src.split('.webp')[0];

        if (config.width) {
          image += `-${config.width}px`;
        }

        return `${url}${image}.webp`;
      },
    },
  ],
})
export class App { }
