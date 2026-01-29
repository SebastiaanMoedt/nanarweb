import { Injectable } from '@angular/core';
import { FilmsDbMock } from './films-db-mock';
import { Cycle } from '../class/cycle';
import { Film } from '../class/film';

@Injectable({
  providedIn: 'root',
})
export class CycleDetailMock {
  cyclesDbMock = new CycleDetailMock
  filmsDbMock = new FilmsDbMock
  

  getAllFilmsInCycle(id: number){
    let filmsInCycle: Film[] = []
    const films = this.filmsDbMock.getAllFilms()
    films.forEach(film => {
      if(film.cycles.includes(id)){
        filmsInCycle.push(film)
      }
      })

  }
}
