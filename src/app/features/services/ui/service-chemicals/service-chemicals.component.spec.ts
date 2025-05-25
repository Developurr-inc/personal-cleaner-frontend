import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChemicalsComponent } from './service-chemicals.component';

describe('ServiceChemicalsComponent', () => {
  let component: ServiceChemicalsComponent;
  let fixture: ComponentFixture<ServiceChemicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceChemicalsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServiceChemicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
