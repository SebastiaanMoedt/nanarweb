import { Injectable } from '@angular/core';
import { Film } from '../class/film';
import { Cycle } from '../class/cycle';
import { CycleState } from '../class/enum/cycle-state';

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