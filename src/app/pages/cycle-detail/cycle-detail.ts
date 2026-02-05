import { Component, inject, OnInit } from '@angular/core';
import { Film } from '../../class/film';
import { CyclesDbMock } from '../../mock/cycles-db-mock';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmState } from '../../class/enum/film-state';
import { CyclesService } from '../../services/cycles-service';



@Component({
  selector: 'app-cycle-detail',
  imports: [],
  templateUrl: './cycle-detail.html',
  styleUrl: './cycle-detail.css',
})

export class CycleDetail implements OnInit{
  cyclesService = new CyclesService
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  cycleName = this.route.snapshot.params['cycleName'];
  listeFilms!: Film[]
  randomFilm!: Film

ngOnInit(): void {
    this.listeFilms = this.getCycleSortedByYear(this.cycleName);
}

getCycleSortedByYear(name: string): Film[]{
  return this.cyclesService.getCycleSortedByYear(name)
}


getCycleSortedBySpecialInfo(name: string): Film[]{
  return this.cyclesService.getCycleSortedBySpecialInfo(name)
}

getRandomFilmFromCycle(name: string): void{
    this.randomFilm = this.cyclesService.getRandomFilmFromCycle(name)
}

}