import { Component, inject } from '@angular/core';
import { CyclesDbMock } from '../../mock/cycles-db-mock';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CycleDetail } from '../cycle-detail/cycle-detail';

@Component({
  selector: 'app-cycles',
  imports: [FormsModule, RouterLink],
  templateUrl: './cycles.html',
  styleUrl: './cycles.css',
})

export class Cycles {
  cycleDetail = new CycleDetail()
  cyclesDbMock = new CyclesDbMock()
  private readonly router = inject(Router);

  getCycles(){
    return this.cyclesDbMock.getAllCycles()
  }

navigateToCycleDetail(id : string){
  this.cycleDetail.cycleId = id
  this.router.navigate(['/cycles/', id]);
}
}
