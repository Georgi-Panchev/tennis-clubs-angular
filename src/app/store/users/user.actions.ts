import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

export const REGISTER_USER = 'REGISTER_USER';

@Injectable({
    providedIn: 'root'
})
export class UserActions {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private store: Store<AppState>
    ) {}
}
