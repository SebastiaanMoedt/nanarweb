import { Component, inject, OnInit } from '@angular/core';
import { Film } from '../../class/film';
import { CyclesDbMock } from '../../mock/cycles-db-mock';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmState } from '../../class/enum/film-state';



@Component({
  selector: 'app-cycle-detail',
  imports: [],
  templateUrl: './cycle-detail.html',
  styleUrl: './cycle-detail.css',
})

export class CycleDetail implements OnInit{
  cycleDbMock: CyclesDbMock = new CyclesDbMock
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  cycleName = this.route.snapshot.params['cycleName'];
  listeFilms!: Film[]
  randomFilm!: Film

ngOnInit(): void {
    this.listeFilms = this.getCycleSortedByYear(this.cycleName);
}

getCycleSortedByYear(name: string): Film[]{
  let allFilms: Film[] = this.cycleDbMock.getAllFilmsInCycle(name)
  let sortedFilms = allFilms.sort((a, b) => {
    if (a.year < b.year) {
        return -1;
    }
    if (a.year > b.year) {
        return 1;
    }
    return 0;
  });
  return sortedFilms
}


getCycleSortedBySpecialInfo(name: string): Film[]{
  let allFilms: Film[] = this.cycleDbMock.getAllFilmsInCycle(name)
  let sortedFilms = allFilms.sort((a, b) => {
    if (a.specialInfo < b.specialInfo) {
        return -1;
    }
    if (a.specialInfo > b.specialInfo) {
        return 1;
    }
    return 0;
  });
  return sortedFilms
}

getRandomFilmFromCycle(name: string): Film{
  let allFilms: Film[] = this.cycleDbMock.getAllFilmsInCycle(name)
  let randomFilm = allFilms[Math.floor(Math.random() * allFilms.length)];
  while(randomFilm.filmState === FilmState.WATCHED || randomFilm.filmState === FilmState.TO_DELETE){
    randomFilm = allFilms[Math.floor(Math.random() * allFilms.length)]
  }
  console.log("RANDOM FILM: " + randomFilm.title);
  this.randomFilm = randomFilm
  return randomFilm
}

}