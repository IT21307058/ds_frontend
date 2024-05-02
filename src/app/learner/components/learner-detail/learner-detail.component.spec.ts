import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerDetailComponent } from './learner-detail.component';

describe('LearnerDetailComponent', () => {
  let component: LearnerDetailComponent;
  let fixture: ComponentFixture<LearnerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnerDetailComponent]
    });
    fixture = TestBed.createComponent(LearnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
