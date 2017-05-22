import { TestBed, inject } from '@angular/core/testing';

import { BaseLoaderService } from './base-loader.service';

describe('BaseLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseLoaderService]
    });
  });

  it('should ...', inject([BaseLoaderService], (service: BaseLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
