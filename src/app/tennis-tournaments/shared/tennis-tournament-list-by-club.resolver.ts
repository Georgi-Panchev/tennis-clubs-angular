import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';
import { TennisTournamentService } from './tennis-tournament.service';
import { READ_TENNIS_TOURNAMENT_LIST_BY_CLUB } from '../../store/tennis-tournaments/tennis-tournament.actions';

@Injectable({
    providedIn: 'root'
})
export class TennisTournamentListByClubResolver implements Resolve<Observable<boolean>> {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private tennisTournamentService: TennisTournamentService,
        private store: Store<AppState>
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const tennisClubId = route.params.tennisClubId;
        return this.tennisTournamentService.readByClub(tennisClubId)
            .pipe(
                tap((response) => {
                    this.store.dispatch({
                        type: READ_TENNIS_TOURNAMENT_LIST_BY_CLUB,
                        payload: response
                    });
                }),
                mapTo(true)
            );
    }
}
