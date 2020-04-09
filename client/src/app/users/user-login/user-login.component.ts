import { Component, OnDestroy } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { UserActions } from '../../store/users/user.actions';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { UserState } from '../../store/users/user.state';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnDestroy {
    private subscription: Subscription = new Subscription();
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private router: Router,
        private store: Store<AppState>,
        private userActions: UserActions,
        private authService: AuthService
    ) {}

    login(user: UserModel): void {
        console.log(user);
        this.userActions.login(user);

        this.subscription.add(
            this.store
                .select((state: AppState) => state.users)
                .subscribe((userState: UserState) => {
                    if (userState.isUserAuthenticated) {
                        this.authService.authenticateUser(userState.token);
                        this.authService.saveUser(userState.user);
                        this.router.navigateByUrl('home');
                    }
                })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
