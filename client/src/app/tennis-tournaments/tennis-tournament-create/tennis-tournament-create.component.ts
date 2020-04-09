import { Component, OnDestroy } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TennisTournamentActions } from '../../store/tennis-tournaments/tennis-tournament.actions';

@Component({
    selector: 'app-tennis-tournament-create',
    templateUrl: './tennis-tournament-create.component.html'
})
export class TennisTournamentCreateComponent implements OnDestroy {
    private subscription: Subscription = new Subscription();

    // eslint-disable-next-line no-useless-constructor
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store: Store<AppState>,
        private tennisTournamentActions: TennisTournamentActions
    ) {}

    create(tennisTournament): void {
        console.log(tennisTournament);

        this.subscription.add(
            this.activatedRoute.params
                .subscribe((params: Params) => (
                    this.tennisTournamentActions.create(params.tennisClubId, tennisTournament)
                ))
        );

        this.subscription.add(
            this.store
                .select((state: AppState) => state.tennisTournaments.isTennisTournamentCreated)
                .subscribe((isTennisTournamentCreated: boolean) => {
                    if (isTennisTournamentCreated) {
                        this.router.navigateByUrl('tennis-tournaments/list');
                    }
                })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
