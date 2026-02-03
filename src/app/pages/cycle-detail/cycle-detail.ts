import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { Film } from '../../class/film';
import { CyclesDbMock } from '../../mock/cycles-db-mock';
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
  cycleName = this.route.snapshot.params['cycleName'];

ngOnInit(): void {
    this.listeFilms = this.getCycle(this.cycleName);
}
  // https://angular.fr/routing/parameter-router 

getCycle(name: string): Film[]{
  return this.cycleDbMock.getAllFilmsInCycle(name)
}

}
