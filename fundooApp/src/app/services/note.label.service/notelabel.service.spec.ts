import { TestBed, inject } from '@angular/core/testing';

import { NotelabelService } from './notelabel.service';

describe('NotelabelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotelabelService]
    });
  });

  it('should be created', inject([NotelabelService], (service: NotelabelService) => {
    expect(service).toBeTruthy();
  }));
});
