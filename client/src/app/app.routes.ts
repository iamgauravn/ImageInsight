import { Routes } from '@angular/router';
import { MainLayout } from './main-layout/main-layout';
import { FullScreenPages } from './full-screen-pages/full-screen-pages';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: 'dashboard', loadComponent: () => import('./dashboard-page/dashboard-page').then(m => m.DashboardPage) },
        ]
    },

    {
        path: '',
        component: FullScreenPages,
        children: [
            { path: 'login', loadComponent: () => import('./login-page/login-page').then(m => m.LoginPage) },
            { path: 'register-user', loadComponent: () => import('./register-user-page/register-user-page').then(m => m.RegisterUserPage) },
        ]
    }
];
