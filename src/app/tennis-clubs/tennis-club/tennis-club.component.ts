import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TennisClubActions } from '../../store/tennis-clubs/tennis-club.actions';
import { UserState } from '../../store/users/user.state';

@Component({
    selector: 'app-tennis-club',
    templateUrl: './tennis-club.component.html'
})
export class TennisClubComponent implements OnDestroy {
    @Input() tennisClub;
    private subscription: Subscription = new Subscription();
    userState = null;

    constructor(
        private store: Store<AppState>,
        private router: Router,
        private tennisClubActions: TennisClubActions
    ) {
        this.subscription.add(
            this.store
                .select((state: AppState) => state.users)
                .subscribe((userState: UserState) => (this.userState = userState))
        );
    }

    removeClub(tennisClubId) {
        this.tennisClubActions.remove(tennisClubId);

        this.subscription.add(
            this.store
                .select((state: AppState) => state.tennisClubs.isTennisClubRemoved)
                .subscribe((isTennisClubRemoved: boolean) => {
                    if (isTennisClubRemoved) {
                        this.router.navigateByUrl('tennis-clubs/list');
                    }
                })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
