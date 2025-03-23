import { Routes } from '@angular/router';
import { AanbodComponent } from './pages/aanbod/aanbod.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AanmeldenComponent } from './pages/aanmelden/aanmelden.component';
import { VerwijzersComponent } from './pages/verwijzers/verwijzers.component';
import { AanbodDetailComponent } from './pages/aanbod/aanbod-detail/aanbod-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'About',
      },
      {
        path: 'aanbod',
        component: AanbodComponent,
        title: 'Aanbod',
      },
      {
        path: 'aanmelden',
        component: AanmeldenComponent,
        title: 'aanmelden',
      },
      {
        path: 'verwijzers',
        component: VerwijzersComponent,
        title: 'Verwijzers',
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact',
      },
      {
        path: 'aanbod/cognitieve-gedragstherapie',
        component: AanbodDetailComponent,
        title: 'Cognitieve Gedragstherapie',
        data: { treatmentName: 'cognitieve-gedragstherapie' }
      },
      {
        path: 'aanbod/adhd-diagnostiek-en-coaching',
        component: AanbodDetailComponent,
        title: 'ADHD Diagnostiek en Coaching',
        data: { treatmentName: 'adhd-diagnostiek-en-coaching' }
      },
      {
        path: 'aanbod/wandelsessies',
        component: AanbodDetailComponent,
        title: 'Wandelsessies',
        data: { treatmentName: 'wandelsessies' }
      },
      {
        path: 'aanbod/act-acceptance-and-commitment-therapy',
        component: AanbodDetailComponent,
        title: 'Acceptance and Commitment Therapy (ACT)',
        data: { treatmentName: 'act-acceptance-and-commitment-therapy' }
      },
      {
        path: 'aanbod/supervisie-gz-opleiding',
        component: AanbodDetailComponent,
        title: 'Supervisie GZ-opleiding',
        data: { treatmentName: 'supervisie-gz-opleiding' }
      },
];
