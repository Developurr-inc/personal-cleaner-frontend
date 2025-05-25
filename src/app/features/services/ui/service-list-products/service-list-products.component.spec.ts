import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListProductsComponent } from './service-list-products.component';

describe('ServiceListProductsComponent', () => {
  let component: ServiceListProductsComponent;
  let fixture: ComponentFixture<ServiceListProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceListProductsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServiceListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
