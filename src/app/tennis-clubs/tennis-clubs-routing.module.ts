import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthUserActivate } from '../core/guards/auth-user-activate.guard';
import { AuthAdminActivate } from '../core/guards/auth-admin-activate.guard';

import { TennisClubListResolver } from './shared/tennis-club-list.resolver';
import { TennisClubDetailsResolver } from './shared/tennis-club-details.resolver';

import { TennisClubListComponent } from './tennis-club-list/tennis-club-list.component';
import { TennisClubCreateComponent } from './tennis-club-create/tennis-club-create.component';
import { TennisClubDetailsComponent } from './tennis-club-details/tennis-club-details.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        resolve: [ TennisClubListResolver ],
        component: TennisClubListComponent
    },
    {
        path: 'create',
        canActivate: [ AuthAdminActivate ],
        component: TennisClubCreateComponent
    },
    {
        path: ':tennisClubId/details',
        canActivate: [ AuthUserActivate ],
        resolve: [ TennisClubDetailsResolver ],
        component: TennisClubDetailsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TennisClubsRoutingModule {}
