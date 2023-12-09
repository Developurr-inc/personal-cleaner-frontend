import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four routes', () => {
    expect(component.routes.length).toEqual(4);
  });

  it('should have home route set to RouteUrlEnum.HOME', () => {
    expect(component.homeRoute).toEqual('');
  });

  it('should toggle menuOpen on toggleMenu call', () => {
    component.menuOpen = false;
    component.toggleMenu();
    expect(component.menuOpen).toBeTrue();
  });
});
