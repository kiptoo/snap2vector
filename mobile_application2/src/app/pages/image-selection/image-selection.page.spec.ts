import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectionPage } from './image-selection.page';

describe('ImageSelectionPage', () => {
  let component: ImageSelectionPage;
  let fixture: ComponentFixture<ImageSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSelectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
