import { Component, Input } from '@angular/core';
import { ImplementaionStepModel } from '../../models/implementation-step.module';

@Component({
  selector: 'app-step-by-step',
  standalone: true,
  imports: [],
  templateUrl: './step-by-step.component.html',
  styleUrl: './step-by-step.component.css'
})
export class StepByStepComponent {
  @Input ({required:true}) content: ImplementaionStepModel | any;
}
