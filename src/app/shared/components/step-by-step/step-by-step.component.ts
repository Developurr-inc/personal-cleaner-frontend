import { Component, Input } from '@angular/core';
import { ImplementaionStepModel } from '../../models/implementation-step.model';

@Component({
  selector: 'app-step-by-step',
  standalone: true,
  imports: [],
  templateUrl: './step-by-step.component.html',
  styleUrl: './step-by-step.component.css',
})
export class StepByStepComponent {
  @Input({ required: true }) content: ImplementaionStepModel = {
    id: 0,
    title: '',
    section: [
      {
        id: 0,
        subtitle: '',
        items: [
          {
            id: 0,
            part: '',
          },
        ],
      },
    ],
  };
}
