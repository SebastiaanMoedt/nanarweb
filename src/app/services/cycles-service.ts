import { Injectable } from '@angular/core';
import { Film } from '../class/film';
import { CyclesDbMock } from '../mock/cycles-db-mock';
import { FilmState } from '../class/enum/film-state';
import { Cycle } from '../class/cycle';

@Injectable({
  providedIn: 'root',
})
export class CyclesService {
  // TODO: replace cycleDbMock with real database access 
  // (probably with some sort of http request?)
  // https://dbdiagram.io/d/CYCLESDB-v1-69863785bd82f5fce2ecfe5a
cyclesDb = new CyclesDbMock
currentlyLoadedCycle!: Cycle

getAllCycles(){
    return this.cyclesDb.getAllCycles()
  }

getCycleLength(name: string): number{
  return this.cyclesDb.getAllFilmsInCycle(name).length
}




getCycleSortedByYear(name: string): Film[]{
  this.currentlyLoadedCycle = this.cyclesDb.getCycle(name)
  this.currentlyLoadedCycle.films = this.cyclesDb.getAllFilmsInCycle(name)
  let sortedFilms = this.currentlyLoadedCycle.films.sort((a, b) => {
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

getCycleIndex(name: string): number{
    if(this.currentlyLoadedCycle.cycleName == name){
      return this.currentlyLoadedCycle.currentIndex
    }
  return 0
}

decrementCycleIndex(name: string): number{
    if(this.currentlyLoadedCycle.cycleName == name){
      if(this.currentlyLoadedCycle.currentIndex < this.currentlyLoadedCycle.films.length)
      return this.currentlyLoadedCycle.currentIndex++
    }
  return this.currentlyLoadedCycle.currentIndex
  }

incrementCycleIndex(name: string): number{
    if(this.currentlyLoadedCycle.cycleName == name){
      if(this.currentlyLoadedCycle.currentIndex > 0)
      return this.currentlyLoadedCycle.currentIndex--
    }
  return this.currentlyLoadedCycle.currentIndex
  }


getCycleSortedBySpecialInfo(name: string): Film[]{
  let sortedFilms = this.currentlyLoadedCycle.films.sort((a, b) => {
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
    let randomFilm = this.currentlyLoadedCycle.films[Math.floor(Math.random() * this.currentlyLoadedCycle.films.length)];
    while(randomFilm.filmState === FilmState.TO_DELETE){
      randomFilm = this.currentlyLoadedCycle.films[Math.floor(Math.random() * this.currentlyLoadedCycle.films.length)]
    }
    return randomFilm
  }
}
