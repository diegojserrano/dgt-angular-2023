import { TestBed } from '@angular/core/testing';

import { APIPersonasService } from './apipersonas.service';

describe('APIPersonasService', () => {
  let service: APIPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
