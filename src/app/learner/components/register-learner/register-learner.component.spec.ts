import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLearnerComponent } from './register-learner.component';

describe('RegisterLearnerComponent', () => {
  let component: RegisterLearnerComponent;
  let fixture: ComponentFixture<RegisterLearnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterLearnerComponent]
    });
    fixture = TestBed.createComponent(RegisterLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
