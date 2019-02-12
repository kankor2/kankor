import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardQPage } from './hard-q.page';

describe('HardQPage', () => {
  let component: HardQPage;
  let fixture: ComponentFixture<HardQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardQPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
