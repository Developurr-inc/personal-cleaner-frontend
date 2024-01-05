import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportProductsComponent } from './support-products.component';

describe('SupportProductsComponent', () => {
  let component: SupportProductsComponent;
  let fixture: ComponentFixture<SupportProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupportProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
