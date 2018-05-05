import { TestBed, inject } from '@angular/core/testing';

import { SpeechSynthesiserService } from './speech-synthesiser.service';

describe('SpeechSynthesiserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechSynthesiserService]
    });
  });

  it('should be created', inject([SpeechSynthesiserService], (service: SpeechSynthesiserService) => {
    expect(service).toBeTruthy();
  }));
});
