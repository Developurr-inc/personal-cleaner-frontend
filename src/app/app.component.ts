import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

import { NavigationComponent } from "./shared/components/navigation/navigation.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
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
export class AppComponent { }
