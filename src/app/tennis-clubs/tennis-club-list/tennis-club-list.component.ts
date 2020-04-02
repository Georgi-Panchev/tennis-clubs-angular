import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TennisClubModel } from '../shared/tennis-club.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-tennis-club-list',
    templateUrl: './tennis-club-list.component.html'
})
export class TennisClubListComponent {
    tennisClubList$: Observable<TennisClubModel[]>;

    constructor(private store: Store<AppState>) {
        this.tennisClubList$ = this.store
            .select((state: AppState) => state.tennisClubs.tennisClubList);
    }
}
