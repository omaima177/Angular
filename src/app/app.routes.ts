import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ConferanceList } from './conferance-list/conferance-list';
import { NotFound } from './not-found/not-found';
import { ConferanceDetails } from './conferance-details/conferance-details';
import { Confirmation } from './confirmation/confirmation';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'details/:id', component: ConferanceDetails },

  { path: 'confirmation/:id', component: Confirmation },

  { path: 'home', component: Home },
  { path: 'list', component: ConferanceList },
  { path: '**', component: NotFound },
];