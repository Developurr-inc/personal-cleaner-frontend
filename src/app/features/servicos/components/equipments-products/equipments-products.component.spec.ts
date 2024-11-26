import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsProductsComponent } from './equipments-products.component';

describe('EquipmentsProductsComponent', () => {
  let component: EquipmentsProductsComponent;
  let fixture: ComponentFixture<EquipmentsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentsProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
