import { TestBed } from '@angular/core/testing';

import { LeanerService } from './leaner.service';

describe('LeanerService', () => {
  let service: LeanerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeanerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
