import { CyclesDbMock } from '../../mock/cycles-db-mock';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CycleDetail } from '../cycle-detail/cycle-detail';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-cycles',
  imports: [RouterLink],
  templateUrl: './cycles.html',
  styleUrl: './cycles.css',
})

export class Cycles {
  cycleDetail = new CycleDetail()
  cyclesDbMock = new CyclesDbMock()
  private router = inject(Router);

  getCycles(){
    return this.cyclesDbMock.getAllCycles()
  }

navigateToCycleDetail(name : string){
  this.cycleDetail.cycleName = name
  this.router.navigate(['/cycles/', name]);
}
}
