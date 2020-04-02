import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TennisClubFormComponent } from './tennis-club-form/tennis-club-form.component';
import { TennisClubCreateComponent } from './tennis-club-create/tennis-club-create.component';
import { TennisClubComponent } from './tennis-club/tennis-club.component';

@NgModule({
    declarations: [
        TennisClubFormComponent,
        TennisClubCreateComponent,
        TennisClubComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class TennisClubsModule {}
