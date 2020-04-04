import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { TennisTournamentService } from '../../tennis-tournaments/shared/tennis-tournament.service';

export const CREATE_TENNIS_TOURNAMENT = 'CREATE_TENNIS_TOURNAMENT';
export const READ_TENNIS_TOURNAMENT_LIST = 'READ_TENNIS_TOURNAMENT_LIST';
export const READ_ONE_TENNIS_TOURNAMENT = 'READ_ONE_TENNIS_TOURNAMENT';

@Injectable({
    providedIn: 'root'
})
export class TennisTournamentActions {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private store: Store<AppState>,
        private tennisTournamentService: TennisTournamentService
    ) {}

    create(tennisClubId, tennisTournament) {
        this.tennisTournamentService.create(tennisClubId, tennisTournament)
            .subscribe((response) => {
                this.store.dispatch({
                    type: CREATE_TENNIS_TOURNAMENT,
                    payload: response
                });
            });
    }
}
