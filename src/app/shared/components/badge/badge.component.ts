import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  @Input() title: string = 'Please fill the title';
  @Input() color: string = 'bg-gray-500';
  @Input() active: boolean = false;
}
