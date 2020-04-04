import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TennisTournamentModel } from '../../tennis-tournaments/shared/tennis-tournament.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: [ './user-profile.component.css' ]
})
export class UserProfileComponent {
    userTennisTournamentList$: Observable<TennisTournamentModel[]>;
    // eslint-disable-next-line no-useless-constructor
    constructor(private store: Store<AppState>) {
        this.userTennisTournamentList$ = this.store
            .select((state: AppState) => state.tennisTournaments.tennisTournamentListByUser);
    }
}
