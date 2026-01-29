import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';
import { Cycles } from './pages/cycles/cycles';
import { CycleDetail } from './pages/cycle-detail/cycle-detail';
import { CycleAdd } from './pages/cycle-add/cycle-add';
import { FilmDetail } from './pages/film-detail/film-detail';
import { FilmAdd } from './pages/film-add/film-add';
import { Search } from './pages/search/search';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home},
    { path: '**', component: NotFound},
    { path: 'cycles', component: Cycles},
    { path: 'cycle-detail', component: CycleDetail},
    { path: 'cycle-add', component: CycleAdd},
    { path: 'film-detail', component: FilmDetail},
    { path: 'film-add', component: FilmAdd},
    { path: 'search', component: Search}
];
