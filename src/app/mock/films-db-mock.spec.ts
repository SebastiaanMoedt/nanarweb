import { TestBed } from '@angular/core/testing';

import { FilmsDbMock } from './films-db-mock';

describe('FilmsDbMock', () => {
  let service: FilmsDbMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsDbMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
