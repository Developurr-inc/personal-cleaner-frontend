import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaHigieneComponent } from './programa-higiene.component';

describe('ProgramaHigieneComponent', () => {
  let component: ProgramaHigieneComponent;
  let fixture: ComponentFixture<ProgramaHigieneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaHigieneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramaHigieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
