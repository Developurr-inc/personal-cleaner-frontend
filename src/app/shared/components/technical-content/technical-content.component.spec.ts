import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalContentComponent } from './technical-content.component';

describe('TechnicalContentComponent', () => {
  let component: TechnicalContentComponent;
  let fixture: ComponentFixture<TechnicalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
