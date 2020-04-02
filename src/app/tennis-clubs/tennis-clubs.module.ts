import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TennisClubFormComponent } from './tennis-club-form/tennis-club-form.component';

@NgModule({
    declarations: [
        TennisClubFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class TennisClubsModule {}
