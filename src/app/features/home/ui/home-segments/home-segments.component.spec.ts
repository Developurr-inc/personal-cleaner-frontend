import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSegmentsComponent } from './home-segments.component';

describe('HomeSegmentsComponent', () => {
  let component: HomeSegmentsComponent;
  let fixture: ComponentFixture<HomeSegmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSegmentsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
