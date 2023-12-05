import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Personal Cleaner',
    },
    {
        path: 'schedule-your-appointment',
        component: AppointmentComponent,
        title: 'Personal Cleaner',
    },
    {
        path: 'expertise-areas',
        component: ExpertiseComponent,
        title: 'Áreas de Atuação',
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
