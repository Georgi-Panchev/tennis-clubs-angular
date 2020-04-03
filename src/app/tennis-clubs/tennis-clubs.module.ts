import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TennisClubsRoutingModule } from './tennis-clubs-routing.module';

import { TennisClubFormComponent } from './tennis-club-form/tennis-club-form.component';
import { TennisClubCreateComponent } from './tennis-club-create/tennis-club-create.component';
import { TennisClubComponent } from './tennis-club/tennis-club.component';
import { TennisClubListComponent } from './tennis-club-list/tennis-club-list.component';
import { TennisClubDetailsComponent } from './tennis-club-details/tennis-club-details.component';
import { TennisClubEditComponent } from './tennis-club-edit/tennis-club-edit.component';

@NgModule({
    declarations: [
        TennisClubFormComponent,
        TennisClubCreateComponent,
        TennisClubComponent,
        TennisClubListComponent,
        TennisClubDetailsComponent,
        TennisClubEditComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TennisClubsRoutingModule
    ]
})
export class TennisClubsModule {}
