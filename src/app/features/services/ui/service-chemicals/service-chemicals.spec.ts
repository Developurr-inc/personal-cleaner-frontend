import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChemicals } from './service-chemicals';

describe('ServiceChemicals', () => {
  let component: ServiceChemicals;
  let fixture: ComponentFixture<ServiceChemicals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceChemicals]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServiceChemicals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
