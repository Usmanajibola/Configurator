import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureEquipmentComponent } from './configure-equipment.component';

describe('ConfigureEquipmentComponent', () => {
  let component: ConfigureEquipmentComponent;
  let fixture: ComponentFixture<ConfigureEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
