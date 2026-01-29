import { TestBed } from '@angular/core/testing';

import { CycleDetailMock } from './cycle-detail-mock';

describe('CycleDetailMock', () => {
  let service: CycleDetailMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CycleDetailMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
