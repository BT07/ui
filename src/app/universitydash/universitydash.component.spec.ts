import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitydashComponent } from './universitydash.component';

describe('UniversitydashComponent', () => {
  let component: UniversitydashComponent;
  let fixture: ComponentFixture<UniversitydashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitydashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
