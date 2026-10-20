import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ConferanceList } from './conferance-list/conferance-list';
import { NotFound } from './not-found/not-found';
import { ConferanceDetails } from './conferance-details/conferance-details';
import { UserForum } from './user-forum/user-forum';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'details/:id', component: ConferanceDetails },
  { path: 'home', component: Home },
  { path: 'list', component: ConferanceList },
  { path: 'user-forum', component: UserForum },
  { path: '**', component: NotFound },
];