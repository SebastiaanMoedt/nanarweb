import { Component, inject } from '@angular/core';
import { CyclesDbMock } from '../../mock/cycles-db-mock';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cycles',
  imports: [FormsModule, RouterLink],
  templateUrl: './cycles.html',
  styleUrl: './cycles.css',
})

export class Cycles {
  cyclesDbMock = new CyclesDbMock()
  private readonly router = inject(Router);

  getCycles(){
    return this.cyclesDbMock.getAllCycles()
  }

navigateToCycleDetail(id : string){
  this.router.navigate(['/cycles/', id]);
}
}
