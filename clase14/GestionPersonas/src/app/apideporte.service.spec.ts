import { TestBed } from '@angular/core/testing';

import { APIDeporteService } from './apideporte.service';

describe('APIDeporteService', () => {
  let service: APIDeporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIDeporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
