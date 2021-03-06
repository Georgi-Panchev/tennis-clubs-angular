import { Component, OnDestroy } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { UserActions, REGISTER_USER } from '../../store/users/user.actions';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html'
})
export class UserRegisterComponent implements OnDestroy {
    private subscription: Subscription = new Subscription();
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private router: Router,
        private store: Store<AppState>,
        private usersActions: UserActions
    ) {}

    register(user: UserModel): void {
        console.log(user);
        this.usersActions.register(user);

        this.subscription.add(
            this.store
                .select((state: AppState) => state.users.isUserRegistered)
                .subscribe((isUserRegistered: boolean) => {
                    if (isUserRegistered) {
                        this.router.navigateByUrl('users/login');
                    }
                    this.store.dispatch({
                        type: REGISTER_USER,
                        payload: { success: false }
                    });
                })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
