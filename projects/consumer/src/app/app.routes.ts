import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'docs',
    loadComponent: () =>
      import('./pages/docs/docs.component').then((m) => m.DocsComponent),
  },
];
