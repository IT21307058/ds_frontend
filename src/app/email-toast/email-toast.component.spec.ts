import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailToastComponent } from './email-toast.component';

describe('EmailToastComponent', () => {
  let component: EmailToastComponent;
  let fixture: ComponentFixture<EmailToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailToastComponent]
    });
    fixture = TestBed.createComponent(EmailToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
