import { TestBed } from '@angular/core/testing';

import { RequesicaoService } from './requesicao.service';

describe('RequesicaoService', () => {
  let service: RequesicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequesicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
