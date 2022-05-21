import { TestBed } from '@angular/core/testing';

import { NewsappapiService } from './newsappapi.service';

describe('NewsappapiService', () => {
  let service: NewsappapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsappapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
