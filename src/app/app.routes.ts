import { Routes } from '@angular/router';
import { AanbodComponent } from './pages/aanbod/aanbod.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AanmeldenComponent } from './pages/aanmelden/aanmelden.component';
import { VerwijzersComponent } from './pages/verwijzers/verwijzers.component';
import { AanbodDetailComponent } from './pages/aanbod/aanbod-detail/aanbod-detail.component';
import { PraktischeInfoComponent } from './pages/praktische-info/praktische-info.component';
import { PrivacyStatementComponent } from './pages/praktische-info/privacy-statement/privacy-statement.component';

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
        path: 'informatie',
        component: PraktischeInfoComponent,
        title: 'Informatie',
      },
      {
        path: 'privacy-policy',
        component: PrivacyStatementComponent,
        title: 'privacy-policy',
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
        path: 'aanbod/emdr-enkelvoudig-trauma',
        component: AanbodDetailComponent,
        title: 'EMDR',
        data: { treatmentName: 'emdr-enkelvoudig-trauma' }
      },
      {
        path: 'aanbod/cognitieve-gedragstherapie',
        component: AanbodDetailComponent,
        title: 'CTG',
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
        title: 'ACT',
        data: { treatmentName: 'act-acceptance-and-commitment-therapy' }
      },
      {
        path: 'aanbod/schematherapie',
        component: AanbodDetailComponent,
        title: 'ACT',
        data: { treatmentName: 'schematherapie' }
      },
      {
        path: 'aanbod/supervisie-gz-opleiding',
        component: AanbodDetailComponent,
        title: 'Supervisie GZ-opleiding',
        data: { treatmentName: 'supervisie-gz-opleiding' }
      },
];
