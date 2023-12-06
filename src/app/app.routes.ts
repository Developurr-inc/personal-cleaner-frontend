import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';


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
        path: 'faqs',
        component: FaqsComponent,
        title: 'FAQS',
    },
    {   path: 'contact-us',
        component: ContactUsComponent,
        title: 'Contact Us Page',
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us Page'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
