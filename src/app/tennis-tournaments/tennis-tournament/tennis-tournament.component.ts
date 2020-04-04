import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { UserState } from '../../store/users/user.state';
import { Router } from '@angular/router';
import { TennisTournamentActions } from '../../store/tennis-tournaments/tennis-tournament.actions';

@Component({
    selector: 'app-tennis-tournament',
    templateUrl: './tennis-tournament.component.html'
})
export class TennisTournamentComponent implements OnDestroy {
    @Input() tennisTournament;
    private subscription: Subscription = new Subscription();
    userState = null;

    constructor(
        private store: Store<AppState>,
        private router: Router,
        private tennisTournamentActions: TennisTournamentActions
    ) {
        this.subscription.add(
            this.store
                .select((state: AppState) => state.users)
                .subscribe((userState: UserState) => (this.userState = userState))
        );
    }

    removeTournament(tennisTournamentId) {
        this.tennisTournamentActions.remove(tennisTournamentId);

        this.subscription.add(
            this.store
                .select((state: AppState) => state.tennisTournaments.isTennisTournamentRemoved)
                .subscribe((isTennisClubRemoved: boolean) => {
                    if (isTennisClubRemoved) {
                        this.router.navigateByUrl('tennis-tournaments/list');
                    }
                })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
