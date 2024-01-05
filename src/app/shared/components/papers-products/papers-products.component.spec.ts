import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersProductsComponent } from './papers-products.component';

describe('PapersProductsComponent', () => {
  let component: PapersProductsComponent;
  let fixture: ComponentFixture<PapersProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapersProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PapersProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
