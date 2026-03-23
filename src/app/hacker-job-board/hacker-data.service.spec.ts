import { TestBed } from '@angular/core/testing';

import { HackerDataService } from './hacker-data.service';

describe('HackerDataService', () => {
  let service: HackerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
