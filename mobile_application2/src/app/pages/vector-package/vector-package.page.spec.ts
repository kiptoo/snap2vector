import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorPackagePage } from './vector-package.page';

describe('VectorPackagePage', () => {
  let component: VectorPackagePage;
  let fixture: ComponentFixture<VectorPackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorPackagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
