import { Injectable } from '@angular/core';
import { FilmState } from '../class/enum/film-state';
import { Film } from '../class/film';

@Injectable({
  providedIn: 'root',
})
export class FilmsDbMock {
film1: Film = {
        title: "Film1",
        year: 2020,
        length: 100,
        filmPath: "",
        subsPath: "",
        specialInfo: "c'est un film",
        filmState: FilmState.TO_WATCH,
        cycles: [1, 2]
    }
film2: Film = {
        title: "Film2",
        year: 2021,
        length: 102,
        filmPath: "",
        subsPath: "",
        specialInfo: "c'est un autre film",
        filmState: FilmState.TO_WATCH,
        cycles: [2]
    }
    films = [this.film1, this.film2]

    getAllFilms(){
        return this.films
    }
}

