import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ConferanceList } from './conferance-list/conferance-list';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: Home,
    data: { title: 'Accueil' },
  },
  {
    path: 'list',
    component: ConferanceList,
    data: { title: 'Liste des conférences' },
  },
];