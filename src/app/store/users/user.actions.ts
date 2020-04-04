import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserService } from '../../users/shared/user.service';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

@Injectable({
    providedIn: 'root'
})
export class UserActions {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private store: Store<AppState>,
        private userService: UserService
    ) {}

    register(user) {
        this.userService.register(user)
            .subscribe((response) => {
                console.log(response)
                this.store.dispatch({
                    type: REGISTER_USER,
                    payload: response
                });
            });
    }

    login(user) {
        this.userService.login(user)
            .subscribe((response) => {
                this.store.dispatch({
                    type: LOGIN_USER,
                    payload: response
                });
            });
    }

    logout() {
        this.store.dispatch({
            type: LOGOUT_USER
        });
    }
}
