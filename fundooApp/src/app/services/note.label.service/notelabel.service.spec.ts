import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotelabelService } from './notelabel.service';

describe('NotelabelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotelabelService],
      imports:[HttpClientTestingModule],

    });
  });

  it('should be created', inject([NotelabelService], (service: NotelabelService) => {
    expect(service).toBeTruthy();
  }));
});
