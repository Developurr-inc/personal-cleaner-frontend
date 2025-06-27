import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-details',
  imports: [],
  templateUrl: './service-details.html',
  styleUrl: './service-details.css'
})
export class ServiceDetails {
  @Input({ required: true }) image: string = '';
}
