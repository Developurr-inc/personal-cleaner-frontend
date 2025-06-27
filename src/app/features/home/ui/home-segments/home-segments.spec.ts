import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSegments } from './home-segments';

describe('HomeSegments', () => {
  let component: HomeSegments;
  let fixture: ComponentFixture<HomeSegments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSegments]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeSegments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
