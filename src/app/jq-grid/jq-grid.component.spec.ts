/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JqGridComponent } from './jq-grid.component';

describe('JqGridComponent', () => {
  let component: JqGridComponent;
  let fixture: ComponentFixture<JqGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
