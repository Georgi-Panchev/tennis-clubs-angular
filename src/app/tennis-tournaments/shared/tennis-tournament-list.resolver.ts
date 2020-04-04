import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable, of } from 'rxjs';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { TennisTournamentService } from './tennis-tournament.service';
import { READ_TENNIS_TOURNAMENT_LIST } from '../../store/tennis-tournaments/tennis-tournament.actions';

@Injectable({
    providedIn: 'root'
})
export class TennisTournamentListResolver implements Resolve<Observable<boolean>> {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private tennisTournamentService: TennisTournamentService,
        private store: Store<AppState>
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.tennisTournamentService.read()
            .pipe(
                tap((response) => {
                    this.store.dispatch({
                        type: READ_TENNIS_TOURNAMENT_LIST,
                        payload: response
                    });
                }),
                mapTo(true),
                catchError((error) => of(error))
            );
    }
}
