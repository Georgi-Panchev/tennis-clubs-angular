import { Component, OnDestroy } from '@angular/core';
import { UserModel } from '../shared/user.model';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnDestroy {
    // eslint-disable-next-line no-useless-constructor
    constructor() {}

    login(user: UserModel): void {

    }

    ngOnDestroy(): void {}
}
