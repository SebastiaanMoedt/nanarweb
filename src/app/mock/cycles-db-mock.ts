import { Injectable } from '@angular/core';
import { Film } from '../class/film';
import { Cycle } from '../class/cycle';
import { CycleState } from '../class/enum/cycle-state';

@Injectable({
  providedIn: 'root',
})
export class CyclesDbMock {
cycle1: Cycle = {
      cycleName: "test",
      description: "wow un cycle",
      status: CycleState.READY,
      films: []}
cycle2: Cycle = {
        cycleName: "test2",
        description: "wow un autre cycle",
        status: CycleState.READY,
        films: []}
  
cycles: Cycle[] = [this.cycle1, this.cycle2]

getAllCycles(){
  return this.cycles
}
}