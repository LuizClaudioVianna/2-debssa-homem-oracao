import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { GeneralComponent } from './components/general/general.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './guards/auth.guard';
import { scopesGuard } from './guards/scopes.guard';
import { authWithScopes } from './guards/auth-with-scopes';
import { generalInfosResolvers } from './resolvers/general-infos-resolvers';
import { logoutGuard } from './guards/logout.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authWithScopes('dashboard')],
        canDeactivate: [logoutGuard()],
        canActivateChild: [authGuard()],
        children: [
            { path: '', redirectTo: 'general', pathMatch: 'full' },
            {
                path: 'general',
                component: GeneralComponent,
                resolve: {
                    generalInfos: generalInfosResolvers
                }
            },
            { path: 'payments', component: PaymentsComponent },
            { path: 'admin', component: AdminComponent, canActivate:[scopesGuard('admin')] },
        ]
    },
    
    { path: 'not-authorized', component: NotAuthorizedComponent, data: { type: 'not-authorized' } },
    { path: '**', component: NotAuthorizedComponent, data: { type: 'not-found' } },
];
