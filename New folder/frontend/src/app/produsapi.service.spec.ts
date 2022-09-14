import { TestBed } from '@angular/core/testing';

import { ProdusapiService } from './produsapi.service';

describe('ProdusapiService', () => {
  let service: ProdusapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdusapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
