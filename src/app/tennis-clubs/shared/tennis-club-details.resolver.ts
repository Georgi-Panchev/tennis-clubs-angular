import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';
import { TennisClubService } from './tennis-club.service';
import { READ_ONE_TENNIS_CLUB } from '../../store/tennis-clubs/tennis-club.actions';

@Injectable({
    providedIn: 'root'
})
export class TennisClubDetailsResolver implements Resolve<Observable<boolean>> {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private tennisClubService: TennisClubService,
        private store: Store<AppState>
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const tennisClubId = route.params.tennisClubId;
        return this.tennisClubService.readOne(tennisClubId)
            .pipe(
                tap((response) => {
                    this.store.dispatch({
                        type: READ_ONE_TENNIS_CLUB,
                        payload: response
                    });
                }),
                mapTo(true)
            );
    }
}
