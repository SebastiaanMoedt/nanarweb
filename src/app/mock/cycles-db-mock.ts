import { Injectable } from '@angular/core';
import { Film } from '../class/film';
import { Cycle } from '../class/cycle';
import { CycleState } from '../class/enum/cycle-state';
import { FilmState } from '../class/enum/film-state';

@Injectable({
  providedIn: 'root',
})
export class CyclesDbMock {
cycle1: Cycle = 
    {
      cycleName: "test",
      description: "wow un cycle",
      status: CycleState.READY,
      films: [],
      seenInCycle: []
    }
cycle2: Cycle = 
      {
        cycleName: "test2",
        description: "wow un autre cycle",
        status: CycleState.READY,
        films: [],
        seenInCycle: []
      }
cycles: Cycle[] = [this.cycle1, this.cycle2]

film1: Film = {
        id: 1,
        title: "Film1",
        year: 2020,
        length: 100,
        filmPath: "",
        subsPath: "",
        specialInfo: "c'est un film",
        filmState: FilmState.TO_WATCH,
        cycles: [this.cycle1, this.cycle2]
    }
film2: Film = {
        id: 2,
        title: "Film2",
        year: 2021,
        length: 102,
        filmPath: "cliquer ici pour télécharger",
        subsPath: "et là pour les soustitres",
        specialInfo: "c'est un autre film",
        filmState: FilmState.TO_WATCH,
        cycles: [this.cycle2]
    }
film3: Film = {
        id: 3,
        title: "Film3",
        year: 2020,
        length: 101,
        filmPath: "",
        subsPath: "",
        specialInfo: "encore un autre film",
        filmState: FilmState.WATCHED,
        cycles: [this.cycle1, this.cycle2]
    }    

films = [this.film1, this.film2, this.film3]

getAllFilmsInCycle(cycleName: string): Array<Film>{
    let filmsInCycle: Film[] = []
    this.films.forEach(film => 
      {
      film.cycles.forEach(
        cycle => {
          if (cycle.cycleName === cycleName){
            filmsInCycle.push(film)
          }
        }
      )
      console.log(filmsInCycle);
      })
    return filmsInCycle
    }

getAllCycles(){
  return this.cycles
}

getCycle(name: string): Cycle{
  this.cycles.forEach(cycle => 
    {
      if(cycle.cycleName == name)
      {
      return cycle
      }
    return new Cycle()
    })
  return new Cycle()
}

}