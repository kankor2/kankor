import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChtestPage } from './chtest.page';

describe('ChtestPage', () => {
  let component: ChtestPage;
  let fixture: ComponentFixture<ChtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChtestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
