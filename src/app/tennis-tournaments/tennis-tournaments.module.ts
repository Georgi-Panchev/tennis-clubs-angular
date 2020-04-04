import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TennisTournamentFormComponent } from './tennis-tournament-form/tennis-tournament-form.component';
import { TennisTournamentCreateComponent } from './tennis-tournament-create/tennis-tournament-create.component';

@NgModule({
    declarations: [
        TennisTournamentFormComponent,
        TennisTournamentCreateComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class TennisTournamentsModule {}
