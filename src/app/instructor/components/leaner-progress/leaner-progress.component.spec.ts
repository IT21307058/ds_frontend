import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanerProgressComponent } from './leaner-progress.component';

describe('LeanerProgressComponent', () => {
  let component: LeanerProgressComponent;
  let fixture: ComponentFixture<LeanerProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeanerProgressComponent]
    });
    fixture = TestBed.createComponent(LeanerProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
