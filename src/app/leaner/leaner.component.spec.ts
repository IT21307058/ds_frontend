import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanerComponent } from './leaner.component';

describe('LeanerComponent', () => {
  let component: LeanerComponent;
  let fixture: ComponentFixture<LeanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeanerComponent]
    });
    fixture = TestBed.createComponent(LeanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
