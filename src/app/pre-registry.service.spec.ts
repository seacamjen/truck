import { TestBed, inject } from '@angular/core/testing';

import { PreRegistryService } from './pre-registry.service';

describe('PreRegistryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreRegistryService]
    });
  });

  it('should be created', inject([PreRegistryService], (service: PreRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
