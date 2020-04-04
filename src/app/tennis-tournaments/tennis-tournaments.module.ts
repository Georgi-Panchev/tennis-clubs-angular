import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TennisTournamentFormComponent } from './tennis-tournament-form/tennis-tournament-form.component';

@NgModule({
    declarations: [
        TennisTournamentFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class TennisTournamentsModule {}
