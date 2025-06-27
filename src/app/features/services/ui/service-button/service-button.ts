import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-button',
  imports: [CommonModule],
  templateUrl: './service-button.html',
  styleUrl: './service-button.css'
})
export class ServiceButton {
  @Input({ required: true }) id: number = 0;
  @Input({ required: true }) text: string = '';
  @Input({ required: true }) selected: boolean = false;

  @Output() toggleEvent = new EventEmitter<number>();

  onClick() {
    this.toggleEvent.emit(this.id);
  }
}
