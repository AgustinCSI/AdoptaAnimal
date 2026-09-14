import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'adopta/:id',
    loadComponent: () => import('./adopta/adopta.page').then( m => m.AdoptaPage)
  },
  {
    path: 'new-pet',
    loadComponent: () => import('./new-pet/new-pet.page').then( m => m.NewPetPage)
  },
];
