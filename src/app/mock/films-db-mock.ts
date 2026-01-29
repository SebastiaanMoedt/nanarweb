import { Injectable } from '@angular/core';
import { FilmState } from '../class/enum/film-state';
import { Film } from '../class/film';

@Injectable({
  providedIn: 'root',
})
export class FilmsDbMock {}
    const film1: Film = {
        title: "Film1",
        year: 2020,
        length: 100,
        filmPath: "",
        subsPath: "",
        specialInfo: "c'est un film",
        filmState: FilmState.TO_WATCH,
        cycles: []
    }
    const film2: Film = {
        title: "Film2",
        year: 2021,
        length: 102,
        filmPath: "",
        subsPath: "",
        specialInfo: "c'est un autre film",
        filmState: FilmState.TO_WATCH,
        cycles: []
    }
    
    let films = [film1, film2]