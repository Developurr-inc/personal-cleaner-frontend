import { Component } from '@angular/core';

import { IMPLEMENTATION_STEP } from '../../../core/consts/implementation-step.const';

@Component({
  selector: 'app-hygiene-program',
  imports: [],
  templateUrl: './hygiene-program.html',
  styleUrl: './hygiene-program.css'
})
export class HygieneProgram {
  arraySteps = IMPLEMENTATION_STEP;
}
