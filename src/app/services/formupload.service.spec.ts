import { TestBed, inject } from '@angular/core/testing';

import { FormuploadService } from './formupload.service';

describe('FormuploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormuploadService]
    });
  });

  it('should be created', inject([FormuploadService], (service: FormuploadService) => {
    expect(service).toBeTruthy();
  }));
});
