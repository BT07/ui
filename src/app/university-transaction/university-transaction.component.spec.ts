import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityTransactionComponent } from './university-transaction.component';

describe('UniversityTransactionComponent', () => {
  let component: UniversityTransactionComponent;
  let fixture: ComponentFixture<UniversityTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
