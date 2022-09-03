import { TestBed } from '@angular/core/testing';

import { EncriptionService } from './encription.service';

describe('EncriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncriptionService = TestBed.get(EncriptionService);
    expect(service).toBeTruthy();
  });
});
