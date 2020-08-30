import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyModalPage } from './company-modal.page';

describe('CompanyModalPage', () => {
  let component: CompanyModalPage;
  let fixture: ComponentFixture<CompanyModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
