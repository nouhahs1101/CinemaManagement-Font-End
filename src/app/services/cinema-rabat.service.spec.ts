import { TestBed } from '@angular/core/testing';

import { CinemaRabatService } from './cinema-rabat.service';

describe('CinemaRabatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CinemaRabatService = TestBed.get(CinemaRabatService);
    expect(service).toBeTruthy();
  });
});
