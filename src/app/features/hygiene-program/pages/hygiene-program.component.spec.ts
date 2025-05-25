import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneProgramComponent } from './hygiene-program.component';

describe('HygieneProgramComponent', () => {
  let component: HygieneProgramComponent;
  let fixture: ComponentFixture<HygieneProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HygieneProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HygieneProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
