import { TestBed } from '@angular/core/testing';

import { SpringerApiService } from './springer-api.service';

describe('SpringerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringerApiService = TestBed.get(SpringerApiService);
    expect(service).toBeTruthy();
  });
});
