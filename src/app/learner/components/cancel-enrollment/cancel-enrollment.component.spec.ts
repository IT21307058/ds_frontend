import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelEnrollmentComponent } from './cancel-enrollment.component';

describe('CancelEnrollmentComponent', () => {
  let component: CancelEnrollmentComponent;
  let fixture: ComponentFixture<CancelEnrollmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelEnrollmentComponent]
    });
    fixture = TestBed.createComponent(CancelEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
