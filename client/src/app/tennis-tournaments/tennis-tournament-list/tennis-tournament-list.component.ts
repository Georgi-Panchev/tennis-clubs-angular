import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TennisTournamentModel } from '../shared/tennis-tournament.model';

@Component({
    selector: 'app-tennis-tournament-list',
    templateUrl: './tennis-tournament-list.component.html'
})
export class TennisTournamentListComponent {
    tennisTournamentList$: Observable<TennisTournamentModel[]>;

    constructor(private store: Store<AppState>) {
        this.tennisTournamentList$ = this.store
            .select((state: AppState) => state.tennisTournaments.tennisTournamentList);
    }
}
