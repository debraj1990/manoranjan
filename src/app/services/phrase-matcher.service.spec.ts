import { TestBed, inject } from '@angular/core/testing';

import { PhraseMatcherService } from './phrase-matcher.service';

describe('PhraseMatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhraseMatcherService]
    });
  });

  it('should be created', inject([PhraseMatcherService], (service: PhraseMatcherService) => {
    expect(service).toBeTruthy();
  }));
});
