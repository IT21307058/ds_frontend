import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCourseComponent } from './all-course.component';

describe('AllCourseComponent', () => {
  let component: AllCourseComponent;
  let fixture: ComponentFixture<AllCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCourseComponent]
    });
    fixture = TestBed.createComponent(AllCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
