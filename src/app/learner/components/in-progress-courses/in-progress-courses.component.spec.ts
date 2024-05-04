import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressCoursesComponent } from './in-progress-courses.component';

describe('InProgressCoursesComponent', () => {
  let component: InProgressCoursesComponent;
  let fixture: ComponentFixture<InProgressCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InProgressCoursesComponent]
    });
    fixture = TestBed.createComponent(InProgressCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
