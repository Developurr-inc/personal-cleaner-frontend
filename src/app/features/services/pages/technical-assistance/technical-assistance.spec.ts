import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalAssistance } from './technical-assistance';

describe('TechnicalAssistance', () => {
  let component: TechnicalAssistance;
  let fixture: ComponentFixture<TechnicalAssistance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalAssistance]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TechnicalAssistance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
