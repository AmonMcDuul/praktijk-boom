import { TestBed } from '@angular/core/testing';

import { AanmeldingService } from './aanmelding.service';

describe('AanmeldingService', () => {
  let service: AanmeldingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AanmeldingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
