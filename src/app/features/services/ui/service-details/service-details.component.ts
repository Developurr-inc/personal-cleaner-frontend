import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-details',
  imports: [],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {
  @Input({ required: true }) image: string = '';
}
