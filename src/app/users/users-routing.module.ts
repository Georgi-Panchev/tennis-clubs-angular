import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuestActivate } from '../core/guards/auth-guest-activate.guard';

import { UserRegisterComponent } from './user-register/user-register.component';

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
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class UsersRoutingModule {}
