import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TennisTournamentsRoutingModule } from './tennis-tournaments-routing.module';

import { TennisTournamentFormComponent } from './tennis-tournament-form/tennis-tournament-form.component';
import { TennisTournamentCreateComponent } from './tennis-tournament-create/tennis-tournament-create.component';
import { TennisTournamentComponent } from './tennis-tournament/tennis-tournament.component';
import { TennisTournamentListComponent } from './tennis-tournament-list/tennis-tournament-list.component';
import { TennisTournamentDetailsComponent } from './tennis-tournament-details/tennis-tournament-details.component';
import { TennisTournamentEditComponent } from './tennis-tournament-edit/tennis-tournament-edit.component';
import { TennisTournamentListByClubComponent } from './tennis-tournament-list-by-club/tennis-tournament-list-by-club.component';

@NgModule({
    declarations: [
        TennisTournamentFormComponent,
        TennisTournamentCreateComponent,
        TennisTournamentComponent,
        TennisTournamentListComponent,
        TennisTournamentDetailsComponent,
        TennisTournamentEditComponent,
        TennisTournamentListByClubComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TennisTournamentsRoutingModule
    ],
    exports: []
})
export class TennisTournamentsModule {}
