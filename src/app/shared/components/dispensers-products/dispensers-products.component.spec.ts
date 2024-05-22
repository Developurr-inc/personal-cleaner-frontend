import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensersProductsComponent } from './dispensers-products.component';

describe('DispensersProductsComponent', () => {
  let component: DispensersProductsComponent;
  let fixture: ComponentFixture<DispensersProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispensersProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispensersProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
