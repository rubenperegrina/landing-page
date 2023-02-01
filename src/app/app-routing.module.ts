import { enableProdMode } from '@angular/core';
import { Routes } from '@angular/router';
import { environment } from '../environments/environment.dev';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Inici',
    loadComponent:() =>
    import('../app/pages/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'contact',
    title: 'Contacte',
    loadComponent:() =>
      import('../app/pages/contact/contact.component').then((c) => c.ContactComponent)
  },
  {
    path: 'privacy-policy',
    title: 'Política de privacitat',
    loadComponent:() =>
      import('../app/pages/privacy-policy/privacy-policy.component').then((c) => c.PrivacyPolicyComponent)
  },
  {
    path: 'cookies-policy',
    title: 'Política de cookies',
    loadComponent:() =>
      import('../app/pages/cookies-policy/cookies-policy.component').then((c) => c.CookiesPolicyComponent)
  },
  {
    path: 'legal-warning',
    title: 'Avís legal',
    loadComponent:() =>
      import('../app/pages/legal-warning/legal-warning.component').then((c) => c.LegalWarningComponent)
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

if(environment.production) {
  enableProdMode();
}
