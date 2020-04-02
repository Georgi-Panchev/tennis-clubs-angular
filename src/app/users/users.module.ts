import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
    declarations: [
        UserRegisterComponent,
        UserLoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        UsersRoutingModule
    ]
})
export class UsersModule {}
