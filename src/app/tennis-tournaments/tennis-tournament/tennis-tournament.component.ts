import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { UserState } from '../../store/users/user.state';

@Component({
    selector: 'app-tennis-tournament',
    templateUrl: './tennis-tournament.component.html'
})
export class TennisTournamentComponent implements OnDestroy {
    @Input() tennisTournament;
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

    removeTournament(tennisTournamentId) {

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
