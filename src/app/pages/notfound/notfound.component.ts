import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteUrlEnum } from '../../core/enums/route-url.enum';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
})
export class NotfoundComponent {
  protected readonly RouteUrlEnum = RouteUrlEnum;
}
