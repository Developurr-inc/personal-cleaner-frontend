import { Component } from '@angular/core';

import { StepByStepComponent } from '../components/step-by-step/step-by-step.component';
import { IMPLEMENTATION_STEP } from '../../../core/consts/implementation-step.const';

@Component({
  selector: 'app-programa-higiene',
  standalone: true,
  imports: [StepByStepComponent],
  templateUrl: './programa-higiene.component.html',
  styleUrl: './programa-higiene.component.css',
})
export class ProgramaHigieneComponent {
  arraySteps = IMPLEMENTATION_STEP;
}
