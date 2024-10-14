import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthroizedComponent } from './unauthroized.component';

describe('UnauthroizedComponent', () => {
  let component: UnauthroizedComponent;
  let fixture: ComponentFixture<UnauthroizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnauthroizedComponent]
    });
    fixture = TestBed.createComponent(UnauthroizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
