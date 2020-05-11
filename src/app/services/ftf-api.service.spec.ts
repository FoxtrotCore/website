import { TestBed } from '@angular/core/testing';
import { FtfApiService } from './ftf-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('FtfApiService', () => {
  let service: FtfApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(FtfApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
