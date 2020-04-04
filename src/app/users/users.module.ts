import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TennisTournamentsModule } from '../tennis-tournaments/tennis-tournaments.module';

@NgModule({
    declarations: [
        UserRegisterComponent,
        UserLoginComponent,
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        UsersRoutingModule,
        TennisTournamentsModule
    ]
})
export class UsersModule {}
