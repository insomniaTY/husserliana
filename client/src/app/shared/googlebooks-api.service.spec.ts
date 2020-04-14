import { TestBed } from '@angular/core/testing';

import { GoogleBooksService } from './googlebooks.service';

describe('SpringerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleBooksService = TestBed.get(GoogleBooksService);
    expect(service).toBeTruthy();
  });
});
