import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TennisClubModel } from '../shared/tennis-club.model';

@Component({
    selector: 'app-tennis-club-details',
    templateUrl: './tennis-club-details.component.html'
})
export class TennisClubDetailsComponent implements OnInit, OnDestroy {
    private subscription: Subscription = new Subscription();
    isUserAdmin = false;
    tennisClub: TennisClubModel = null;

    constructor(private store: Store<AppState>) {
        this.subscription.add(
            this.store
                .select((state: AppState) => state.users.user)
                .subscribe((user) => (
                    this.isUserAdmin = user.roles.includes('Admin')
                ))
        );
    }

    ngOnInit(): void {
        this.subscription.add(
            this.store
                .select((state: AppState) => state.tennisClubs.tennisClub)
                .subscribe((tennisClub: TennisClubModel) => (
                    this.tennisClub = tennisClub
                ))
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
