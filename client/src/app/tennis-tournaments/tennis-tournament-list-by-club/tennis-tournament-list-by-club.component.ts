import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TennisTournamentModel } from '../shared/tennis-tournament.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

@Component({
    selector: 'app-tennis-tournament-list-by-club',
    templateUrl: './tennis-tournament-list-by-club.component.html'
})
export class TennisTournamentListByClubComponent {
    tennisTournamentListByClub$: Observable<TennisTournamentModel[]>;

    constructor(private store: Store<AppState>) {
        this.tennisTournamentListByClub$ = this.store
            .select((state: AppState) => state.tennisTournaments.tennisTournamentListByClub);
    }
}
