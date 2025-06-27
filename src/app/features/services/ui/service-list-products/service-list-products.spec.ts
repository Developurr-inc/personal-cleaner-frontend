import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListProducts } from './service-list-products';

describe('ServiceListProducts', () => {
  let component: ServiceListProducts;
  let fixture: ComponentFixture<ServiceListProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceListProducts]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServiceListProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
