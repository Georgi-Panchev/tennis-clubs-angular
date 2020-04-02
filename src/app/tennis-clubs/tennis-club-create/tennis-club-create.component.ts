import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TennisClubActions } from '../../store/tennis-clubs/tennis-club.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tennis-club-create',
    templateUrl: './tennis-club-create.component.html'
})
export class TennisClubCreateComponent implements OnDestroy {
    private subscription: Subscription = new Subscription();
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private router: Router,
        private store: Store<AppState>,
        private tennisClubActions: TennisClubActions
    ) {}

    create(tennisClub): void {
        console.log(tennisClub);
        this.tennisClubActions.create(tennisClub);

        this.subscription.add(
            this.store
                .select((state: AppState) => state.tennisClubs.isTennisClubCreated)
                .subscribe((isTennisClubCreated: boolean) => {
                    if (isTennisClubCreated) {
                        this.router.navigateByUrl('tennis-clubs/list');
                    }
                })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
