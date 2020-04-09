import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { UserActions } from '../../../store/users/user.actions';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { UserState } from '../../../store/users/user.state';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    private subscription: Subscription = new Subscription();
    isUserAuthenticated = false;
    isUserAdmin = false;
    username: string = null;

    // eslint-disable-next-line no-useless-constructor
    constructor(
        private router: Router,
        private store: Store<AppState>,
        private userActions: UserActions,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.subscription.add(
            this.store
                .select((state: AppState) => state.users)
                .subscribe((userState: UserState) => {
                    this.isUserAuthenticated = userState.isUserAuthenticated;
                    this.isUserAdmin = userState.user.roles.includes('Admin');
                    this.username = userState.user.username;
                })
        );
    }

    logout() {
        this.userActions.logout();

        this.authService.deauthenticateUser();
        this.authService.removeUser();
        this.router.navigateByUrl('home');
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
