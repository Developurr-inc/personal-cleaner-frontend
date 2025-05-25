import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogSectionsComponent } from './home-blog-sections.component';

describe('HomeBlogSectionsComponent', () => {
  let component: HomeBlogSectionsComponent;
  let fixture: ComponentFixture<HomeBlogSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBlogSectionsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeBlogSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
