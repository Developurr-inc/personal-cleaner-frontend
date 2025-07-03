import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStatsItem } from './home-stats-item';

describe('HomeStatsItem', () => {
  let component: HomeStatsItem;
  let fixture: ComponentFixture<HomeStatsItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStatsItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStatsItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
