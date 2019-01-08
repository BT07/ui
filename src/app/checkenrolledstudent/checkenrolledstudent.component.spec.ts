import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckenrolledstudentComponent } from './checkenrolledstudent.component';

describe('CheckenrolledstudentComponent', () => {
  let component: CheckenrolledstudentComponent;
  let fixture: ComponentFixture<CheckenrolledstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckenrolledstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckenrolledstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
