import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorConfigComponent } from './configurator-config.component';

describe('ConfiguratorConfigComponent', () => {
  let component: ConfiguratorConfigComponent;
  let fixture: ComponentFixture<ConfiguratorConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguratorConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
