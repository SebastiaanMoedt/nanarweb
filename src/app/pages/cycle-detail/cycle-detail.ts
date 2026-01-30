import { Component, input, InputSignal, OnInit } from '@angular/core';
import { CycleDetailMock } from '../../mock/cycle-detail-mock';
import { HttpParams } from '@angular/common/http';
import { Film } from '../../class/film';

@Component({
  selector: 'app-cycle-detail',
  imports: [],
  templateUrl: './cycle-detail.html',
  styleUrl: './cycle-detail.css',
})



export class CycleDetail implements OnInit{
  readonly cycleId: InputSignal<string> = input.required<string>();
  cycleDetailMock = new CycleDetailMock
  listeFilms!: Film[]
  ngOnInit(): void {
    this.listeFilms = this.getCycle(parseInt(this.cycleId()));
  }

  // https://angular.fr/routing/parameter-router à voir

getCycle(id: number): Film[]{
  return this.cycleDetailMock.getAllFilmsInCycle(id)
};
}
