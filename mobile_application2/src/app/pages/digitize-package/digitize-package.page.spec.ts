import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitizePackagePage } from './digitize-package.page';

describe('DigitizePackagePage', () => {
  let component: DigitizePackagePage;
  let fixture: ComponentFixture<DigitizePackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitizePackagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitizePackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
