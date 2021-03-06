import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { TennisTournamentService } from '../../tennis-tournaments/shared/tennis-tournament.service';

export const CREATE_TENNIS_TOURNAMENT = 'CREATE_TENNIS_TOURNAMENT';
export const READ_TENNIS_TOURNAMENT_LIST = 'READ_TENNIS_TOURNAMENT_LIST';
export const READ_ONE_TENNIS_TOURNAMENT = 'READ_ONE_TENNIS_TOURNAMENT';
export const EDIT_TENNIS_TOURNAMENT = 'EDIT_TENNIS_TOURNAMENT';
export const READ_TENNIS_TOURNAMENT_LIST_BY_CLUB = 'READ_TENNIS_TOURNAMENT_LIST_BY_CLUB';
export const READ_TENNIS_TOURNAMENT_LIST_BY_USER = 'READ_TENNIS_TOURNAMENT_LIST_BY_USER';
export const ATTEND_TENNIS_TOURNAMENT = 'ATTEND_TENNIS_TOURNAMENT';
export const LEAVE_TENNIS_TOURNAMENT = 'LEAVE_TENNIS_TOURNAMENT';
export const REMOVE_TENNIS_TOURNAMENT = 'REMOVE_TENNIS_TOURNAMENT';

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

    edit(tennisTournamentId, tennisTournament) {
        this.tennisTournamentService.edit(tennisTournamentId, tennisTournament)
            .subscribe((response) => {
                this.store.dispatch({
                    type: EDIT_TENNIS_TOURNAMENT,
                    payload: response
                });
            });
    }

    attend(tennisTournamentId) {
        this.tennisTournamentService.attend(tennisTournamentId)
            .subscribe((response) => {
                this.store.dispatch({
                    type: ATTEND_TENNIS_TOURNAMENT,
                    payload: response
                });
            });
    }

    leave(tennisTournamentId) {
        this.tennisTournamentService.leave(tennisTournamentId)
            .subscribe((response) => {
                this.store.dispatch({
                    type: LEAVE_TENNIS_TOURNAMENT,
                    payload: response
                });
            });
    }

    remove(tennisTournamentId) {
        this.tennisTournamentService.remove(tennisTournamentId)
            .subscribe((response) => {
                this.store.dispatch({
                    type: REMOVE_TENNIS_TOURNAMENT,
                    payload: response
                });
            });
    }
}
