import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclingInfoComponent } from './circling-info.component';

describe('CirclingInfoComponent', () => {
  let component: CirclingInfoComponent;
  let fixture: ComponentFixture<CirclingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirclingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
