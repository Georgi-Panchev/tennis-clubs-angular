import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable, of } from 'rxjs';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { TennisTournamentService } from './tennis-tournament.service';
import { READ_ONE_TENNIS_TOURNAMENT } from '../../store/tennis-tournaments/tennis-tournament.actions';

@Injectable({
    providedIn: 'root'
})
export class TennisTournamentDetailsResolver implements Resolve<Observable<boolean>> {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private tennisTournamentService: TennisTournamentService,
        private store: Store<AppState>
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const tennisTournamentId = route.params.tennisTournamentId;
        return this.tennisTournamentService.readOne(tennisTournamentId)
            .pipe(
                tap((response) => {
                    this.store.dispatch({
                        type: READ_ONE_TENNIS_TOURNAMENT,
                        payload: response
                    });
                }),
                mapTo(true),
                catchError((error) => of(error))
            );
    }
}
