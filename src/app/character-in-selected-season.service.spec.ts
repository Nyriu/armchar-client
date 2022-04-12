import { TestBed } from '@angular/core/testing';

import { CharacterInSelectedSeasonService } from './character-in-selected-season.service';

describe('CharacterInSelectedSeasonService', () => {
  let service: CharacterInSelectedSeasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterInSelectedSeasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
