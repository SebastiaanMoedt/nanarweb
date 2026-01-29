import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleAdd } from './cycle-add';

describe('CycleAdd', () => {
  let component: CycleAdd;
  let fixture: ComponentFixture<CycleAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CycleAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycleAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
