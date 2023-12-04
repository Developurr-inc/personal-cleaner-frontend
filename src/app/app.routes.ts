import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

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
        path: 'contact-us',
        component: ContactUsComponent,
        title: 'Contact Us Page',
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
