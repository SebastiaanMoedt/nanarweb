import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';
import { Cycles } from './pages/cycles/cycles';
import { CycleDetail } from './pages/cycle-detail/cycle-detail';
import { CycleAdd } from './pages/cycle-add/cycle-add';
import { FilmAdd } from './pages/film-add/film-add';
import { Search } from './pages/search/search';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home},
    { path: 'cycles', component: Cycles},
    { path: 'cycles/:cycleName', component: CycleDetail},
    { path: 'cycle-add', component: CycleAdd},
    { path: 'film-add', component: FilmAdd},
    { path: 'search', component: Search},
    
    // ALWAYS LAST
    { path: '**', component: NotFound}
];
