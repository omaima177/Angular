import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Fonctionnalités à page unique : loadComponent
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.Home),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./conferance-list/conferance-list').then(m => m.ConferanceList),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./conferance-details/conferance-details').then(m => m.ConferanceDetails),
  },
  {
    path: 'confirmation/:id',
    loadComponent: () =>
      import('./confirmation/confirmation').then(m => m.Confirmation),
  },

  // Fonctionnalité à plusieurs pages : loadChildren
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },

  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then(m => m.NotFound),
  },
];