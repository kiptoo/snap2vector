import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModalPage } from './card-modal.page';

describe('CardModalPage', () => {
  let component: CardModalPage;
  let fixture: ComponentFixture<CardModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
