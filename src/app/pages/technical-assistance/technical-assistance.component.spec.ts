import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalAssistanceComponent } from './technical-assistance.component';

describe('TecnicalAssistanceComponent', () => {
  let component: TechnicalAssistanceComponent;
  let fixture: ComponentFixture<TechnicalAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalAssistanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicalAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
