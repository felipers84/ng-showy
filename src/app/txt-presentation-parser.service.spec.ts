import { TestBed, inject } from '@angular/core/testing';

import { TxtPresentationParserService } from './txt-presentation-parser.service';

describe('TxtPresentationParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TxtPresentationParserService]
    });
  });

  it('should be created', inject([TxtPresentationParserService], (service: TxtPresentationParserService) => {
    expect(service).toBeTruthy();
  }));
});
