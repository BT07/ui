import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavstudentComponent } from './sidenavstudent.component';

describe('SidenavstudentComponent', () => {
  let component: SidenavstudentComponent;
  let fixture: ComponentFixture<SidenavstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
