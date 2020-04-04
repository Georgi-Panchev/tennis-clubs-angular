import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TennisTournamentFormComponent } from './tennis-tournament-form/tennis-tournament-form.component';
import { TennisTournamentCreateComponent } from './tennis-tournament-create/tennis-tournament-create.component';
import { TennisTournamentComponent } from './tennis-tournament/tennis-tournament.component';
import { TennisTournamentListComponent } from './tennis-tournament-list/tennis-tournament-list.component';

@NgModule({
    declarations: [
        TennisTournamentFormComponent,
        TennisTournamentCreateComponent,
        TennisTournamentComponent,
        TennisTournamentListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class TennisTournamentsModule {}
