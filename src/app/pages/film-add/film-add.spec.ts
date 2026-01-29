import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmAdd } from './film-add';

describe('FilmAdd', () => {
  let component: FilmAdd;
  let fixture: ComponentFixture<FilmAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
