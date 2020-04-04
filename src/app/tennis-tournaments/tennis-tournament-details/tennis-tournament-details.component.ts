import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TennisTournamentModel } from '../shared/tennis-tournament.model';
import { UserState } from '../../store/users/user.state';

@Component({
    selector: 'app-tennis-tournament-details',
    templateUrl: './tennis-tournament-details.component.html'
})
export class TennisTournamentDetailsComponent implements OnInit, OnDestroy {
    private subscription: Subscription = new Subscription();
    userState = null;
    tennisTournament: TennisTournamentModel = null;

    constructor(
        private store: Store<AppState>
    ) {
        this.subscription.add(
            this.store
                .select((state: AppState) => state.users)
                .subscribe((userState: UserState) => (this.userState = userState))
        );
    }

    ngOnInit(): void {
        this.subscription.add(
            this.store
                .select((state: AppState) => state.tennisTournaments.tennisTournament)
                .subscribe((tennisTournament: TennisTournamentModel) => {
                    this.tennisTournament = tennisTournament;
                })
        );
    }

    attendTournament(tennisTournamentId) {

    }

    leaveTournament(tennisTournamentId) {

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
