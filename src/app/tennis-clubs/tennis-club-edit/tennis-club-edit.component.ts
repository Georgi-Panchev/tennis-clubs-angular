import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TennisClubActions } from '../../store/tennis-clubs/tennis-club.actions';
import { TennisClubModel } from '../shared/tennis-club.model';

@Component({
    selector: 'app-tennis-club-edit',
    templateUrl: './tennis-club-edit.component.html'
})
export class TennisClubEditComponent implements OnInit, OnDestroy {
    private subscription: Subscription = new Subscription();
    tennisClub: TennisClubModel = null;

    // eslint-disable-next-line no-useless-constructor
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store: Store<AppState>,
        private tennisClubActions: TennisClubActions
    ) {}

    ngOnInit(): void {
        this.subscription.add(
            this.store
                .select((state: AppState) => state.tennisClubs.tennisClub)
                .subscribe((tennisClub: TennisClubModel) => {
                    this.tennisClub = tennisClub;
                })
        );
    }

    edit(tennisClub) {
        console.log(tennisClub);
        this.subscription.add(
            this.activatedRoute.params
                .subscribe((params: Params) => (
                    this.tennisClubActions.edit(params.tennisClubId, tennisClub)
                ))
        );

        this.subscription.add(
            this.store
                .select((state: AppState) => state.tennisClubs.isTennisClubEdited)
                .subscribe((isTennisClubEdited: boolean) => {
                    if (isTennisClubEdited) {
                        this.router.navigateByUrl('tennis-clubs/list');
                    }
                })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
