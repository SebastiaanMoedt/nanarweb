import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { Film } from '../../class/film';
import { CyclesDbMock } from '../../mock/cycles-db-mock';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cycle-detail',
  imports: [],
  templateUrl: './cycle-detail.html',
  styleUrl: './cycle-detail.css',
})



export class CycleDetail{
  cycleDbMock: CyclesDbMock = new CyclesDbMock
  private router = inject(Router);
  listeFilms!: Film[]
  private route = inject(ActivatedRoute);
  cycleId = this.route.snapshot.params['cycleId'];

ngOnInit(): void {
    this.listeFilms = this.getCycle(parseInt(this.cycleId));
}
  // https://angular.fr/routing/parameter-router 

getCycle(id: number): Film[]{
  return this.cycleDbMock.getAllFilmsInCycle(id)
}
}
