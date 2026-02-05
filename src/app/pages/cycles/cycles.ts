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

navigateToCycleDetail(name : string){
  this.cycleDetail.cycleName = name
  this.router.navigate(['/cycles/', name]);
}
}
