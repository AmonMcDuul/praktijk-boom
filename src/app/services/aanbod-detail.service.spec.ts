import { TestBed } from '@angular/core/testing';

import { AanbodDetailService } from './aanbod-detail.service';

describe('AanbodDetailService', () => {
  let service: AanbodDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AanbodDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
