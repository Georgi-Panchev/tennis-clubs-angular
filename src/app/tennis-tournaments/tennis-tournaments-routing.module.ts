import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthAdminActivate } from '../core/guards/auth-admin-activate.guard';

import { TennisTournamentListResolver } from './shared/tennis-tournament-list.resolver';


import { TennisTournamentListComponent } from './tennis-tournament-list/tennis-tournament-list.component';
import { TennisTournamentCreateComponent } from './tennis-tournament-create/tennis-tournament-create.component';

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
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TennisTournamentsRoutingModule {}
