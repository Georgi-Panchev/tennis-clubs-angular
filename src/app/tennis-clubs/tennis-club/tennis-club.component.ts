import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Subscription } from 'rxjs';
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
        private store: Store<AppState>
    ) {
        this.subscription.add(
            this.store
                .select((state: AppState) => state.users)
                .subscribe((userState: UserState) => (this.userState = userState))
        );
    }

    removeClub(tennisClubId) {

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
