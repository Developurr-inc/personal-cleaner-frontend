import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteUrlEnum } from '../../../../core/enums/route-url.enum';

@Component({
  selector: 'app-nao-encontrado',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nao-encontrado.component.html',
  styleUrl: './nao-encontrado.component.css',
})
export class NaoEncontradoComponent {
  protected readonly RouteUrlEnum = RouteUrlEnum;
}
