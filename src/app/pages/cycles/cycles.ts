import { CyclesDbMock } from '../../mock/cycles-db-mock';
import { Router } from '@angular/router';
import { CycleDetail } from '../cycle-detail/cycle-detail';
import { Component, inject } from '@angular/core';
import { CyclesService } from '../../services/cycles-service';
import { CycleState } from '../../class/enum/cycle-state';

@Component({
  selector: 'app-cycles',
  imports: [],
  templateUrl: './cycles.html',
  styleUrl: './cycles.css',
})

export class Cycles {
  cycleDetail = new CycleDetail()
  cyclesServices = new CyclesService()
  private router = inject(Router);
  gifs = [
    'gifs/bride1.gif',
    'gifs/dancing1.gif',
    'gifs/dancing2.gif',
    'gifs/dino1.gif',
    'gifs/dove1.gif',
    'gifs/dracula1.gif',
    'gifs/dvd1.gif',
    'gifs/dvd2.gif',
    'gifs/emo1.gif',
    'gifs/eye1.gif',
    'gifs/eye2.gif',
    'gifs/eye3.gif',
    'gifs/eye4.gif',
    'gifs/frankenstein1.gif',
    'gifs/ghost1.gif',
    'gifs/godzilla1.gif',
    'gifs/godzilla2.gif',
    'gifs/halloween1.gif',
    'gifs/halloween2.gif',
    'gifs/hellcome1.gif',
    'gifs/hellraiser1.gif',
    'gifs/hellraiser2.gif',
    'gifs/house1.gif',
    'gifs/mermaid1.gif',
    'gifs/mermaid2.gif',
    'gifs/monster1.gif',
    'gifs/movie1.gif',
    'gifs/planet1.gif',
    'gifs/planet2.gif',
    'gifs/shark1.gif',
    'gifs/shark2.gif',
    'gifs/skeleton1.gif',
    'gifs/skull1.gif',
    'gifs/skull2.gif',
    'gifs/skull3.gif',
    'gifs/tritri1.gif',
    'gifs/trumpet1.gif',
    'gifs/ufo1.gif',
    'gifs/ufo2.gif',
    'gifs/whale1.gif'
  ]

  getAllCycles(){
    return this.cyclesServices.getAllCycles()
  }

  getCycleState(status: CycleState): string{
    if(status === CycleState.CURRENT){
      return "EN COURS"
    }
    if(status === CycleState.READY){
      return "PRET"
    }
    if(status === CycleState.TO_FILL){
      return "A TROUVER"
    }
    if(status === CycleState.WATCHED){
      return "VU"
    }
    // TODO: send a different message for each state
    return ""
  }

  getCycleLength(name: string): number{
    return this.cyclesServices.getCycleLength(name)
  }

randomImg(): string{
  const randomIndex = Math.floor(Math.random() * this.gifs.length - 1)
  return this.gifs[randomIndex]
}

navigateToCycleDetail(name : string){
  this.cycleDetail.cycleName = name
  this.router.navigate(['/cycles/', name]);
}
}
