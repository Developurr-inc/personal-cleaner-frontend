import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentContentComponent } from './equipment-content.component';

describe('EquipmentContentComponent', () => {
  let component: EquipmentContentComponent;
  let fixture: ComponentFixture<EquipmentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
