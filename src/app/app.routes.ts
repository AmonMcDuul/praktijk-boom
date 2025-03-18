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
        path: 'aanbod/:naam',
        component: AanbodDetailComponent,
        title: 'Detail'
      }
];
