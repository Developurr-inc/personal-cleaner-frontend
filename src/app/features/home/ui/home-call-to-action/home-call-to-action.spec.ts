import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCallToAction } from './home-call-to-action';

describe('HomeCallToAction', () => {
  let component: HomeCallToAction;
  let fixture: ComponentFixture<HomeCallToAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCallToAction]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeCallToAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
