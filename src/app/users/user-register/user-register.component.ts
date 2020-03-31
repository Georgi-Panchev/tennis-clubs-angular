import { Component, OnDestroy } from '@angular/core';
import { UserModel } from '../shared/user.model';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html'
})
export class UserRegisterComponent implements OnDestroy {
    constructor() {}

    register(user: UserModel): void {}

    ngOnDestroy(): void {}
}
