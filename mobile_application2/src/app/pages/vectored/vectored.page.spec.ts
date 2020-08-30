import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectoredPage } from './vectored.page';

describe('VectoredPage', () => {
  let component: VectoredPage;
  let fixture: ComponentFixture<VectoredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectoredPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectoredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
