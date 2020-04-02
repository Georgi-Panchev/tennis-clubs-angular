import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TennisClubFormComponent } from './tennis-club-form/tennis-club-form.component';
import { TennisClubCreateComponent } from './tennis-club-create/tennis-club-create.component';
import { TennisClubComponent } from './tennis-club/tennis-club.component';
import { TennisClubListComponent } from './tennis-club-list/tennis-club-list.component';

@NgModule({
    declarations: [
        TennisClubFormComponent,
        TennisClubCreateComponent,
        TennisClubComponent,
        TennisClubListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class TennisClubsModule {}
