import { Component, inject, OnInit } from '@angular/core';
import { Film } from '../../class/film';
import { ActivatedRoute } from '@angular/router';
import { CyclesService } from '../../services/cycles-service';
import { CycleAdd } from "../cycle-add/cycle-add";



@Component({
  selector: 'app-cycle-detail',
  imports: [CycleAdd],
  templateUrl: './cycle-detail.html',
  styleUrl: './cycle-detail.css',
})

export class CycleDetail implements OnInit{
  cyclesService = new CyclesService
  private route = inject(ActivatedRoute);
  cycleName = this.route.snapshot.params['cycleName'];
  listeFilms!: Film[]
  randomFilm!: Film
  cycleIndex!: number

ngOnInit(): void {
    this.listeFilms = this.getCycleSortedByYear(this.cycleName);
    this.cycleIndex = this.getCycleIndex(this.cycleName)
}

getCycleSortedByYear(name: string): Film[]{
  return this.cyclesService.getCycleSortedByYear(name)
}

getCycleIndex(name: string): number {
  return this.cyclesService.getCycleIndex(name)
}

getCycleSortedBySpecialInfo(name: string): Film[]{
  return this.cyclesService.getCycleSortedBySpecialInfo(name)
}

getRandomFilmFromCycle(name: string): void{
    this.randomFilm = this.cyclesService.getRandomFilmFromCycle(name)
}

}