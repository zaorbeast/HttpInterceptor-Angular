import { TestBed } from '@angular/core/testing';

import { HttpServicesTestService } from './http-services-test.service';

describe('HttpServicesTestService', () => {
  let service: HttpServicesTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServicesTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
