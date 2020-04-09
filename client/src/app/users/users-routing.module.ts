import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuestActivate } from '../core/guards/auth-guest-activate.guard';
import { AuthUserActivate } from '../core/guards/auth-user-activate.guard';

import { UserTennisTournamentListResolver } from './shared/user-tennis-tournament-list.resolver';

import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'register'
    },
    {
        path: 'register',
        canActivate: [ AuthGuestActivate ],
        component: UserRegisterComponent
    },
    {
        path: 'login',
        canActivate: [ AuthGuestActivate ],
        component: UserLoginComponent
    },
    {
        path: 'profile',
        canActivate: [ AuthUserActivate ],
        resolve: [ UserTennisTournamentListResolver ],
        component: UserProfileComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class UsersRoutingModule {}
