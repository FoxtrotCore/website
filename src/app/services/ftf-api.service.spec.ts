import { TestBed } from '@angular/core/testing';

import { FtfApiService } from './ftf-api.service';

describe('FtfApiService', () => {
  let service: FtfApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtfApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
