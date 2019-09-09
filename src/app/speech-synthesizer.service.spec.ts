import { TestBed } from '@angular/core/testing';

import { SpeechSynthesizerService } from './speech-synthesizer.service';

describe('SpeechSynthesizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeechSynthesizerService = TestBed.get(SpeechSynthesizerService);
    expect(service).toBeTruthy();
  });
});
