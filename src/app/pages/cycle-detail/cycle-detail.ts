import { Component } from '@angular/core';
import { CycleDetailMock } from '../../mock/cycle-detail-mock';

@Component({
  selector: 'app-cycle-detail',
  imports: [],
  templateUrl: './cycle-detail.html',
  styleUrl: './cycle-detail.css',
})

const cycleDetailMock = new CycleDetailMock

export class CycleDetail {
  getCycle(id: number){
  cycleDetailMock.getAllFilmsInCycle(id)
}
}
