import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { TennisClubService } from '../../tennis-clubs/shared/tennis-club.service';

export const CREATE_TENNIS_CLUB = 'CREATE_TENNIS_CLUB';
export const READ_TENNIS_CLUB_LIST = 'READ_TENNIS_CLUB_LIST';

@Injectable({
    providedIn: 'root'
})
export class TennisClubActions {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private store: Store<AppState>,
        private tennisClubService: TennisClubService
    ) {}

    create(tennisClub) {
        this.tennisClubService.create(tennisClub)
            .subscribe((response) => {
                this.store.dispatch({
                    type: CREATE_TENNIS_CLUB,
                    payload: response
                });
            });
    }
}
