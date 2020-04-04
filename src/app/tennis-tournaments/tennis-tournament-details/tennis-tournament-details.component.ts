import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TennisTournamentModel } from '../shared/tennis-tournament.model';
import { UserState } from '../../store/users/user.state';
import { TennisTournamentActions } from '../../store/tennis-tournaments/tennis-tournament.actions';

@Component({
    selector: 'app-tennis-tournament-details',
    templateUrl: './tennis-tournament-details.component.html'
})
export class TennisTournamentDetailsComponent implements OnInit, OnDestroy {
    private subscription: Subscription = new Subscription();
    userState = null;
    tennisTournament: TennisTournamentModel = null;
    isTournamentAttended = false;

    constructor(
        private store: Store<AppState>,
        private tennisTournamentActions: TennisTournamentActions
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
                    this.isTournamentAttended = this.tennisTournament.playersRegistered
                        .some((user: any) => user._id === this.userState.user.userId);
                })
        );
    }

    attendTournament(tennisTournamentId) {
        this.tennisTournamentActions.attend(tennisTournamentId);
    }

    leaveTournament(tennisTournamentId) {
        this.tennisTournamentActions.leave(tennisTournamentId);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
