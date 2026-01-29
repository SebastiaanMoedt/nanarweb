import { Component } from '@angular/core';
import { Cycle } from '../../class/cycle';
import { CyclesDbMock } from '../../mock/cycles-db-mock';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cycles',
  imports: [FormsModule],
  templateUrl: './cycles.html',
  styleUrl: './cycles.css',
})
export class Cycles {
  cyclesDbMock = new CyclesDbMock()

  getCycles(){
    return this.cyclesDbMock.getAllCycles()
  }
}
