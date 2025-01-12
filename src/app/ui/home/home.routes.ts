/* eslint-disable prettier/prettier */
import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';
import { ApplicationsComponent } from './pages/applications/applications.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'vacancies', component: VacanciesComponent },
      { path: 'applications', component: ApplicationsComponent },
      {
        path: '**',
        redirectTo: 'vacancies',
        pathMatch: 'full',
      },
    ],
  },
];
