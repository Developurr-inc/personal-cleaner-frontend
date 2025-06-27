import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneProgram } from './hygiene-program';

describe('HygieneProgram', () => {
  let component: HygieneProgram;
  let fixture: ComponentFixture<HygieneProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HygieneProgram]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HygieneProgram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
