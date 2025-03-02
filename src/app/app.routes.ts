import { Routes } from '@angular/router';
import { HomeComponent } from '@features/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'connect',
        loadChildren: () => import('./features/auth/signin/lazy.route').then(m => m.routes),
    },
];
