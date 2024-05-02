import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLeanerComponent } from './register-leaner.component';

describe('RegisterLeanerComponent', () => {
  let component: RegisterLeanerComponent;
  let fixture: ComponentFixture<RegisterLeanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterLeanerComponent]
    });
    fixture = TestBed.createComponent(RegisterLeanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
