import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-service-details',
  imports: [NgOptimizedImage],
  templateUrl: './service-details.html',
  styleUrl: './service-details.css'
})
export class ServiceDetails {
  @Input({ required: true }) image: string = '';
}
