import { TestBed } from '@angular/core/testing';

import { TurneuapiService } from './turneuapi.service';

describe('TurneuapiService', () => {
  let service: TurneuapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurneuapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
