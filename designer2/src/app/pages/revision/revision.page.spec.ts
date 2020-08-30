import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionPage } from './revision.page';

describe('RevisionPage', () => {
  let component: RevisionPage;
  let fixture: ComponentFixture<RevisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
