import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollstuentComponent } from './enrollstuent.component';

describe('EnrollstuentComponent', () => {
  let component: EnrollstuentComponent;
  let fixture: ComponentFixture<EnrollstuentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollstuentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollstuentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
