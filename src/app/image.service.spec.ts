import { TestBed, inject } from '@angular/core/testing';

import { ImageService } from './image/shared/image.service';

describe('ImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageService]
    });
  });

  it('should be created', inject([ImageService], (service: ImageService) => {
    expect(service).toBeTruthy();
  }));
});
