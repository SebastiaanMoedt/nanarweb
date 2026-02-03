import { Injectable } from '@angular/core';
import { Film } from '../class/film';
import { Cycle } from '../class/cycle';
import { CycleState } from '../class/enum/cycle-state';
import { FilmState } from '../class/enum/film-state';

@Injectable({
  providedIn: 'root',
})
export class CyclesDbMock {
cycle1: Cycle = {
      cycleId: 1,
      cycleName: "test",
      description: "wow un cycle",
      status: CycleState.READY,
      films: []}
cycle2: Cycle = {
        cycleId: 2,
        cycleName: "test2",
        description: "wow un autre cycle",
        status: CycleState.READY,
        films: []}
  
cycles: Cycle[] = [this.cycle1, this.cycle2]

film1: Film = {
        title: "Film1",
        year: 2020,
        length: 100,
        filmPath: "",
        subsPath: "",
        specialInfo: "c'est un film",
        filmState: FilmState.TO_WATCH,
        cycles: [1, 2]
    }
film2: Film = {
        title: "Film2",
        year: 2021,
        length: 102,
        filmPath: "cliquer ici pour télécharger",
        subsPath: "et là pour les soustitres",
        specialInfo: "c'est un autre film",
        filmState: FilmState.TO_WATCH,
        cycles: [2]
    }
film3: Film = {
        title: "Film3",
        year: 2020,
        length: 101,
        filmPath: "",
        subsPath: "",
        specialInfo: "encore un autre film",
        filmState: FilmState.TO_WATCH,
        cycles: [2, 1]
    }    

films = [this.film1, this.film2, this.film3]

getAllFilmsInCycle(id: number){
    let filmsInCycle: Film[] = []
    this.films.forEach(film => {
      if(film.cycles.includes(id)){
        filmsInCycle.push(film)
      }
      })
      console.log(filmsInCycle);
      
    return filmsInCycle
  }

getAllCycles(){
  return this.cycles
}

getCycle(id: number)
{
  this.cycles.forEach(cycle => 
    {
    if(cycle.cycleId == id)
      {
      return cycle
      }
    return null
    })
}}