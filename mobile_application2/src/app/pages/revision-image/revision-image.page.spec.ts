import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionImagePage } from './revision-image.page';

describe('RevisionImagePage', () => {
  let component: RevisionImagePage;
  let fixture: ComponentFixture<RevisionImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
