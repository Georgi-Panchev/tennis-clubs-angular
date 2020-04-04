import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthAdminActivate } from '../core/guards/auth-admin-activate.guard';
import { AuthUserActivate } from '../core/guards/auth-user-activate.guard';

import { TennisTournamentListResolver } from './shared/tennis-tournament-list.resolver';
import { TennisTournamentDetailsResolver } from './shared/tennis-tournament-details.resolver';

import { TennisTournamentListComponent } from './tennis-tournament-list/tennis-tournament-list.component';
import { TennisTournamentCreateComponent } from './tennis-tournament-create/tennis-tournament-create.component';
import { TennisTournamentDetailsComponent } from './tennis-tournament-details/tennis-tournament-details.component';
import { TennisTournamentEditComponent } from './tennis-tournament-edit/tennis-tournament-edit.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        resolve: [ TennisTournamentListResolver ],
        component: TennisTournamentListComponent
    },
    {
        path: 'create/:tennisClubId',
        canActivate: [ AuthAdminActivate ],
        component: TennisTournamentCreateComponent
    },
    {
        path: ':tennisTournamentId/details',
        canActivate: [ AuthUserActivate ],
        resolve: [ TennisTournamentDetailsResolver ],
        component: TennisTournamentDetailsComponent
    },
    {
        path: ':tennisTournamentId/edit',
        canActivate: [ AuthAdminActivate ],
        component: TennisTournamentEditComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TennisTournamentsRoutingModule {}
