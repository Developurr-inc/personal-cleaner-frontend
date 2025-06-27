import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogSections } from './home-blog-sections';

describe('HomeBlogSections', () => {
  let component: HomeBlogSections;
  let fixture: ComponentFixture<HomeBlogSections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBlogSections]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeBlogSections);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
