import { Component } from '@angular/core';
import { Cycle } from '../../class/cycle';
import { CyclesDbMock } from '../../mock/cycles-db-mock';

@Component({
  selector: 'app-cycles',
  imports: [],
  templateUrl: './cycles.html',
  styleUrl: './cycles.css',
})
export class Cycles {

  getCycles(){
    const cycles: Cycle[] = CyclesDbMock.getAllCycles()
  }
}
