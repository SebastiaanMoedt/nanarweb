import { TestBed } from '@angular/core/testing';

import { CyclesDbMock } from './cycles-db-mock';

describe('CyclesDbMock', () => {
  let service: CyclesDbMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyclesDbMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
