import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
    declarations: [
        UserRegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class UsersModule {}
