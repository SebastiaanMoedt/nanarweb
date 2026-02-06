import { Injectable } from '@angular/core';
import { Film } from '../class/film';
import { CyclesDbMock } from '../mock/cycles-db-mock';
import { FilmState } from '../class/enum/film-state';

@Injectable({
  providedIn: 'root',
})
export class CyclesService {
  // TODO: replace cycleDbMock with real database access 
  // (probably with some sort of http request?)
  // https://dbdiagram.io/d/CYCLESDB-v1-69863785bd82f5fce2ecfe5a
cyclesDb = new CyclesDbMock

getCycleSortedByYear(name: string): Film[]{
  let allFilms: Film[] = this.cyclesDb.getAllFilmsInCycle(name)
  let sortedFilms = allFilms.sort((a, b) => {
    if (a.year < b.year) {
        return -1;
    }
    if (a.year > b.year) {
        return 1;
    }
    return 0;
  });
  return sortedFilms
}

  getAllCycles(){
    return this.cyclesDb.getAllCycles()
  }

getCycleLength(name: string): number{
  return this.cyclesDb.getAllFilmsInCycle(name).length
}

getCycleSortedBySpecialInfo(name: string): Film[]{
  let allFilms: Film[] = this.cyclesDb.getAllFilmsInCycle(name)
  let sortedFilms = allFilms.sort((a, b) => {
    if (a.specialInfo < b.specialInfo) {
        return -1;
    }
    if (a.specialInfo > b.specialInfo) {
        return 1;
    }
    return 0;
  });
  return sortedFilms
}


  getRandomFilmFromCycle(name: string): Film{
    let allFilms: Film[] = this.cyclesDb.getAllFilmsInCycle(name)
    let randomFilm = allFilms[Math.floor(Math.random() * allFilms.length)];
    while(randomFilm.filmState === FilmState.TO_DELETE){
      randomFilm = allFilms[Math.floor(Math.random() * allFilms.length)]
    }
    return randomFilm
  }
}
