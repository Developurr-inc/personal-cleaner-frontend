import { Component } from '@angular/core';

import { StepByStepComponent } from '../../shared/components/step-by-step/step-by-step.component'


@Component({
  selector: 'app-implementation',
  standalone: true,
  imports: [
    StepByStepComponent,
  ],
  templateUrl: './implementation.component.html',
  styleUrl: './implementation.component.css'
})
export class ImplementationComponent {

}
