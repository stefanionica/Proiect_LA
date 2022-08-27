import { TestBed } from '@angular/core/testing';

import { BiletapiService } from './biletapi.service';

describe('BiletapiService', () => {
  let service: BiletapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiletapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
