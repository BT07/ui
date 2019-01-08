import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavuniversityComponent } from './sidenavuniversity.component';

describe('SidenavuniversityComponent', () => {
  let component: SidenavuniversityComponent;
  let fixture: ComponentFixture<SidenavuniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavuniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavuniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
