import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleDetail } from './cycle-detail';

describe('CycleDetail', () => {
  let component: CycleDetail;
  let fixture: ComponentFixture<CycleDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CycleDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycleDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
