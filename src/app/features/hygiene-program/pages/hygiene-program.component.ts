import { Component } from '@angular/core';

import { IMPLEMENTATION_STEP } from '../../../core/consts/implementation-step.const';

@Component({
  selector: 'app-hygiene-program',
  imports: [],
  templateUrl: './hygiene-program.component.html',
  styleUrl: './hygiene-program.component.css'
})
export class HygieneProgramComponent {
  arraySteps = IMPLEMENTATION_STEP;
}
