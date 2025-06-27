import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceButton } from './service-button';

describe('ServiceButton', () => {
  let component: ServiceButton;
  let fixture: ComponentFixture<ServiceButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServiceButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
