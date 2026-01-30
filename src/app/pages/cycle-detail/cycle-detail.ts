import { Component, input, InputSignal, OnInit } from '@angular/core';
import { Film } from '../../class/film';
import { CyclesDbMock } from '../../mock/cycles-db-mock';
@Component({
  selector: 'app-cycle-detail',
  imports: [],
  templateUrl: './cycle-detail.html',
  styleUrl: './cycle-detail.css',
})



export class CycleDetail implements OnInit{
  cycleDbMock: CyclesDbMock = new CyclesDbMock
  cycleId: string = ""
  listeFilms!: Film[]
  
ngOnInit(): void {
  
    this.listeFilms = this.getCycle(parseInt(this.cycleId));
}

  // https://angular.fr/routing/parameter-router à voir

getCycle(id: number): Film[]{
  return this.cycleDbMock.getAllFilmsInCycle(id)
};
}
