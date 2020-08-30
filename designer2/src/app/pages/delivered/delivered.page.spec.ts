import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredPage } from './delivered.page';

describe('DeliveredPage', () => {
  let component: DeliveredPage;
  let fixture: ComponentFixture<DeliveredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
